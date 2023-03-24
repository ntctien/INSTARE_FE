import { Upload } from "antd";
import Modal from "../../Modal";
import imageIcon from "../../../assets/image.svg";
// import MediaSlider from "../MediaSlider";

const { Dragger } = Upload;

const CreatePostModal = ({ open, onCancel }) => {
  return (
    <Modal open={open} onCancel={onCancel} title="Create new post">
      <div className="px-[20px] py-[14px] create-post">
        {/* Upload */}
        <Dragger showUploadList={false}>
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] bg-[#77777740] rounded-full center">
              <img src={imageIcon} alt="Upload" />
            </div>
            <h1 className="font-semibold text-[20px] leading-[24px] text-[#676767] mt-[7px]">
              Add photos/videos
            </h1>
            <p className="text-[12px] leading-[15px] text-[#676767]">
              Or drag and drop
            </p>
          </div>
        </Dragger>
        {/* <MediaSlider/> */}
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
