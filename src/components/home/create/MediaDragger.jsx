import { Upload } from "antd";
import imageIcon from "../../../assets/image.svg";
import addMediaIcon from "../../../assets/add-media.svg";

const { Dragger } = Upload;

const MediaDragger = ({ fileList, setFileList }) => {
  const handleChange = ({ fileList: newFileList }) => {
    for (let i = 0; i < newFileList.length; i++) {
      getFileUrl(newFileList[i].originFileObj, i, newFileList);
    }
  };
  const getFileUrl = (file, index, newFileList) => {
    const url = URL.createObjectURL(file);
    const temp = newFileList;
    temp[index] = { ...temp[index], url };
    setFileList(temp);

    return () => URL.revokeObjectURL(url);
  };
  return (
    <Dragger
      name="file"
      showUploadList={false}
      multiple
      action={null}
      beforeUpload={() => false}
      onChange={handleChange}
      maxCount={10}
      className={fileList.length < 1 ? 'media-dragger' : 'media-upload'}
    >
      {fileList.length < 1 ? (
        <div className="flex flex-col items-center justify-center h-[46vh] aspect-[4/3]">
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
      ) : (
          <div className="row gap-x-[6.5px] p-[6px]">
            <img src={addMediaIcon} alt="Add photos/videos" />
            <p className="font-medium text-14">
              Add photos/videos ({fileList.length}/10)
            </p>
          </div>
      )}
    </Dragger>
  );
};

export default MediaDragger;
