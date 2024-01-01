import CloseModalContainer from "~/components/modal/CloseModalContainer";
import MediaSlider from "../media_slider/MediaSlider";
import MediaDragger from "./MediaDragger";
import convertImgUrlToFile from "~/utils/convertImgUrlToFile";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import createPost from "~/api/services/post/createPost";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PostInfo from "../post/PostInfo";
import CreatePostAction from "./CreatePostAction";
import {
  Layout1,
  Layout2,
  Layout3,
  Layout4,
} from "~/components/home/post_layouts";
import editIcon from "~/assets/edit.svg";

const CreateNewPost = ({
  onCancel,
  fileList,
  setFileList,
  currentSlide,
  emotion,
  tags,
  setCurrentSlide,
  setCurrFeature,
  layout,
  setLayout,
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fileList.length < 4) setLayout(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList]);

  const handleDelete = (currentSlide) => {
    setFileList(fileList.filter((file, i) => i !== currentSlide));
  };

  const handlePost = async () => {
    setLoading(true);
    const files = await Promise.all(
      fileList.map(async (file) => {
        if (file.type.split("/")[0] === "video") return file.originFileObj;
        return await convertImgUrlToFile(file.url, file.name);
      })
    );

    await createPost(
      currentUser.token,
      files,
      caption,
      emotion?.unified,
      tags.map((tag) => tag.id).join(","),
      layout
    )
      .then(({ data }) => {
        onCancel();
        if (location.pathname !== "/") navigate("/");
        else window.location.reload(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const getLayout = () => {
    switch (layout) {
      case 1:
        return (
          <MediaSlider
            mediaList={fileList.map((file) => {
              return { url: file?.url, type: file?.type?.split("/")[0] };
            })}
            handleDelete={handleDelete}
            setCurrFeature={setCurrFeature}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            dots
          />
        );
      case 2:
        return <Layout1 fileList={fileList} />;
      case 3:
        return <Layout2 fileList={fileList} />;
      case 4:
        return <Layout3 fileList={fileList} />;
      case 5:
        return <Layout4 fileList={fileList} />;
      default:
        break;
    }
  };

  return (
    <CloseModalContainer onCancel={onCancel}>
      <Spin spinning={loading}>
        <div className="w-[550px] px-[20px] py-[14px] create-post">
          {/* Preview */}
          <h3 className="font-medium text-14">Preview</h3>
          <div className="between-row my-[10px]">
            <PostInfo
              username={currentUser.username}
              ava={currentUser.ava}
              tags={tags.map((tag) => ({ user: tag }))}
              emotionId={emotion?.unified}
            />
            <CreatePostAction
              fileList={fileList}
              layout={layout}
              setCurrFeature={setCurrFeature}
              onChangeLayout={() => setLayout((prev) => (prev % 5) + 1)}
            />
          </div>
          {/* Upload */}
          {fileList.length < 10 && (
            <div
              className={fileList.length < 1 && "flex flex-col items-center"}
            >
              <MediaDragger fileList={fileList} setFileList={setFileList} />
            </div>
          )}
          {fileList.length > 0 && fileList.length < 10 && (
            <div className="w-full h-[10px]" />
          )}
          {/* Media slider */}
          {fileList.length > 0 && (
            <div className="h-[46vh] aspect-[4/3] mx-auto relative">
              {getLayout()}
              <button
                className="row gap-x-[6px] py-[6px] pl-[6.5px] pr-[11px] bg-white rounded-5 absolute right-[6px] bottom-[10px] hover:brightness-95"
                onClick={() => setCurrFeature("edit-media")}
              >
                <img src={editIcon} alt="Edit" />
                <p className="font-medium text-14">Edit</p>
              </button>
            </div>
          )}
          {/* User info */}
          <div className="row gap-x-[7px] mt-[13px]">
            <div className="w-[30px] avatar overflow-hidden">
              {currentUser.ava && (
                <img
                  src={currentUser.ava}
                  alt="Avatar"
                  className="w-full h-full object-cover object-center"
                />
              )}
            </div>
            <h3 className="font-semibold text-14">{currentUser.username}</h3>
          </div>
          {/* Caption */}
          <textarea
            placeholder="Write a caption..."
            maxLength={2200}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="resize-none w-full mt-[13px] bg-transparent focus:outline-none text-14 placeholder:text-black50 h-[50px]"
          />
          {/* Post button */}
          {fileList.length > 0 && (
            <button onClick={handlePost} className="primary-btn mt-[10px]">
              POST
            </button>
          )}
        </div>
      </Spin>
    </CloseModalContainer>
  );
};

export default CreateNewPost;
