import { useEffect, useState } from "react";
import Modal from "../../Modal";
import MediaSlider from "../media_slider/MediaSlider";
import MediaDragger from "./MediaDragger";

const CreatePostModal = ({ open, onCancel }) => {
  const [fileList, setFileList] = useState([]);

  const handleDelete = (currentSlide) => {
    const newFileList = fileList;
    newFileList.splice(currentSlide, 1);
    setFileList([...newFileList]);
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);
  return (
    <Modal open={open} onCancel={onCancel} title="Create new post">
      <div className="px-[20px] py-[14px] create-post">
        {/* Upload */}
        {fileList.length < 1 ? (
          <MediaDragger setFileList={setFileList} />
        ) : (
          <MediaSlider
            mediaList={fileList.map((file) => {
              return { url: file?.url, type: file?.type.split('/')[0]};
            })}
            editMode
            handleDelete={handleDelete}
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
      </div>
    </Modal>
  );
};

export default CreatePostModal;
