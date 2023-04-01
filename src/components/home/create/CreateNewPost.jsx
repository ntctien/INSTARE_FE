import { useContext } from "react";
import MediaSlider from "../media_slider/MediaSlider";
import MediaDragger from "./MediaDragger";
import { FeatureContext } from "../../../contexts/FeatureContext";
import closeIcon from "../../../assets/close.svg";

const CreateNewPost = ({ onCancel,fileList, setFileList }) => {
  const { setCurrFeature } = useContext(FeatureContext);

  const handleDelete = (currentSlide) => {
    const newFileList = fileList;
    newFileList.splice(currentSlide, 1);
    setFileList([...newFileList]);
  };
  return (
    <>
      <div className="px-[20px] py-[14px] create-post">
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
              return { url: file?.url, type: file?.type.split("/")[0] };
            })}
            editMode
            handleDelete={handleDelete}
            setCurrFeature={setCurrFeature}
          />
        )}
        {/* User info */}
        <div className="row gap-x-[7px] mt-[13px]">
          <div className="w-[30px] avatar"></div>
          <h3 className="font-semibold text-14">_ptt.chang</h3>
        </div>
        {/* Caption */}
        <textarea
          placeholder="Write a caption..."
          className="resize-none w-full mt-[13px] bg-transparent focus:outline-none text-14 placeholder:text-black50 h-[100px]"
        />
        {/* Post button */}
        {fileList.length > 0 && <button className="post-btn">POST</button>}
      </div>
      {/* Close button */}
      <button
        onClick={onCancel}
        className="absolute top-[11.5px] right-[13.5px]"
      >
        <img src={closeIcon} alt="Close" />
      </button>
    </>
  );
};

export default CreateNewPost;
