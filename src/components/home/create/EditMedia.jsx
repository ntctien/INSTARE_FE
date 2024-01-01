import BackModalContainer from "~/components/modal/BackModalContainer";
import MediaSlider from "../media_slider/MediaSlider";

const EditMedia = ({
  fileList,
  currentSlide,
  setCurrentSlide,
  setCurrFeature,
  setFileList,
}) => {
  const handleDelete = (currentSlide) => {
    if (fileList.length === 1) {
      setCurrFeature("create");
    }
    setFileList(fileList.filter((file, i) => i !== currentSlide));
  };

  return (
    <BackModalContainer
      onBack={() => setCurrFeature("create")}
      onCancel={() => setCurrFeature("create")}
    >
      <div className="p-5 create-post">
        <div className="h-[50vh] aspect-[4/3]">
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
        </div>
      </div>
    </BackModalContainer>
  );
};

export default EditMedia;
