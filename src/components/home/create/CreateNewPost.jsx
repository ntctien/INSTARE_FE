import CloseModalContainer from "~/components/modal/CloseModalContainer";
import MediaSlider from "../media_slider/MediaSlider";
import MediaDragger from "./MediaDragger";
import convertImgUrlToFile from "~/utils/convertImgUrlToFile";
import { Spin } from "antd";
import { useState } from "react";
import createPost from "~/api/services/post/createPost";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PostInfo from "../post/PostInfo";
import CreatePostAction from "./CreatePostAction";

const CreateNewPost = ({
  onCancel,
  fileList,
  setFileList,
  currentSlide,
  setCurrentSlide,
  setCurrFeature,
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);

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

    await createPost(currentUser.token, files, caption)
      .then(({ data }) => {
        onCancel();
        if (location.pathname !== "/") navigate("/");
        else window.location.reload(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <CloseModalContainer onCancel={onCancel}>
      <Spin spinning={loading}>
        <div className="px-[20px] py-[14px] create-post">
          {/* Preview */}
          <h3 className="font-medium text-14">Preview</h3>
          <div className="between-row my-[10px]">
            <PostInfo
              username={currentUser.username}
              ava={currentUser.ava}
              tags={tags.map((tag) => ({ user: tag }))}
            />
            <CreatePostAction tags={tags} setTags={setTags} />
          </div>
          {/* Upload */}
          {fileList.length < 10 && (
            <MediaDragger fileList={fileList} setFileList={setFileList} />
          )}
          {fileList.length > 0 && fileList.length < 10 && (
            <div className="w-full h-[10px]" />
          )}
          {/* Media slider */}
          {fileList.length > 0 && (
            <MediaSlider
              mediaList={fileList.map((file) => {
                return { url: file?.url, type: file?.type?.split("/")[0] };
              })}
              editMode
              handleDelete={handleDelete}
              setCurrFeature={setCurrFeature}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              dots
            />
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
            className="resize-none w-full mt-[13px] bg-transparent focus:outline-none text-14 placeholder:text-black50 h-[100px]"
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
