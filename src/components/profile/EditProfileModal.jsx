import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, message } from "antd";
import CloseModal from "../modal/CloseModal";
import CountingTextArea from "../CountingTextArea";
import ChangePhotoModal from "./ChangePhotoModal";
import updateProfileOnly from "~/api/services/user/updateProfileOnly";
import useForm from "~/hooks/useForm";
import usernameRule from "~/constants/usernameRule";
import { signIn } from "~/actions/auth";
import convertImgUrlToFile from "~/utils/convertImgUrlToFile";
import uploadAvaOnly from "~/api/services/user/uploadAvaOnly";
import updateProfileWithAva from "~/api/services/user/updateProfileWithAva";

const valuesObj = {
  username: usernameRule,
  name: {},
  bio: {},
};

const EditProfileModal = ({ open, onCancel }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    values,
    errors,
    getInputProps,
    setValues,
    setFieldValue,
    setFieldError,
    handleSubmit,
  } = useForm(valuesObj);
  const fileInputRef = useRef(null);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [tempImgUrl, setTempImgUrl] = useState(null);

  useEffect(() => {
    setValues({
      username: currentUser.username ?? "",
      name: currentUser.name ?? "",
      bio: currentUser.bio ?? "",
    });
    if (currentUser.ava) setImgUrl(currentUser.ava);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeAva = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (fileObj) {
      const url = URL.createObjectURL(fileObj);
      setTempImgUrl(url);
      setModal("change-photo");
      e.target.value = null;
    }
  };

  const handleUpdateProfileOnly = async () => {
    setLoading(true);
    await updateProfileOnly(
      currentUser.token,
      values.username,
      values.name,
      values.bio
    )
      .then(({ data }) => {
        dispatch(
          signIn({
            ...currentUser,
            username: data.username,
            name: data.name,
            bio: data.bio,
          })
        );
        if (data.message) {
          if (data.name !== currentUser.name || data.bio !== currentUser.bio) {
            message.success("Full Name/Bio updated successfully");
          }
          setFieldValue("username", data.username);
          setFieldError("username", data.message);
        } else {
          onCancel();
        }
      })
      .catch((err) => {
        setFieldError("username", err.response.data.message);
      });
    setLoading(false);
  };

  const handleUploadAvaOnly = async () => {
    setLoading(true);
    const file = await convertImgUrlToFile(imgUrl, `ava_${currentUser.id}`);
    await uploadAvaOnly(currentUser.token, file)
      .then(({ data }) => {
        dispatch(
          signIn({
            ...currentUser,
            ava: data,
          })
        );
        onCancel();
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const handleUploadProfileWithAva = async () => {
    setLoading(true);
    const file = await convertImgUrlToFile(imgUrl, `ava_${currentUser.id}`);
    await updateProfileWithAva(
      currentUser.token,
      values.username,
      values.name,
      values.bio,
      file
    )
      .then(({ data }) => {
        if (data.message) {
          if (
            data.name !== currentUser.name ||
            data.bio !== currentUser.bio ||
            imgUrl !== currentUser.ava
          ) {
            message.success("Updated full name/bio/avatar successfully");
            dispatch(
              signIn({
                ...currentUser,
                name: values.name,
                bio: values.bio,
                ava: imgUrl,
              })
            );
          }
          setFieldValue("username", currentUser.username);
          setFieldError("username", data.message);
        } else {
          onCancel();
          dispatch(
            signIn({
              ...currentUser,
              username: values.username,
              name: values.name,
              bio: values.bio,
              ava: imgUrl,
            })
          );
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const valuesChanged = () => {
    if (
      values.username !== currentUser.username ||
      values.name !== (currentUser.name ?? "") ||
      values.bio !== (currentUser.bio ?? "")
    )
      return true;
    return false;
  };

  const handleSave = (e) => {
    if (valuesChanged() && imgUrl !== currentUser.ava)
      handleSubmit(e, handleUploadProfileWithAva);
    else if (valuesChanged()) handleSubmit(e, handleUpdateProfileOnly);
    else if (imgUrl !== currentUser.ava) {
      handleUploadAvaOnly();
    } else {
      onCancel();
    }
  };

  return (
    <>
      <CloseModal
        title={"Edit profile"}
        open={open}
        onCancel={onCancel}
        hidden={modal === "change-photo"}
      >
        <Spin spinning={loading}>
          <div className="w-[480px] px-[20px] py-[17px]">
            <div className="px-[20px]">
              <div className="row gap-x-30">
                {/* Profile photo */}
                <div className="w-[150px] aspect-square bg-grey rounded-full overflow-hidden">
                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt="Avatar"
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-y-[15px]">
                  <button
                    onClick={handleChangeAva}
                    className="edit-profile-btn bg-blue hover:brightness-105 text-white"
                  >
                    Change profile photo
                  </button>
                  <button className="edit-profile-btn border-1 border-red text-red hover:border-2">
                    Remove profile photo
                  </button>
                </div>
              </div>
              {/* Inputs */}
              <div className="edit-profile-input">
                <h3>Username</h3>
                <input {...getInputProps("username")} />
                <p style={{ color: "#F24E1E" }}>{errors["username"]}</p>
                <p>
                  In most cases, you'll be able to change your username back to
                  _username for another 14 days.
                </p>
              </div>
              <div className="edit-profile-input">
                <h3>Full Name</h3>
                <input {...getInputProps("name")} />
              </div>
              <div className="edit-profile-input">
                <h3>Bio</h3>
                <CountingTextArea {...getInputProps("bio")} maxLength={150} />
              </div>
            </div>
            {/* Save button */}
            <button onClick={handleSave} className="primary-btn mt-[12px]">
              SAVE
            </button>
            {/* File input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              multiple={false}
              hidden
              onChange={handleFileInputChange}
            />
          </div>
        </Spin>
      </CloseModal>
      {modal === "change-photo" && (
        <ChangePhotoModal
          tempUrl={tempImgUrl}
          setImgUrl={setImgUrl}
          open={modal === "change-photo"}
          onCancel={() => setModal(null)}
        />
      )}
    </>
  );
};

export default EditProfileModal;
