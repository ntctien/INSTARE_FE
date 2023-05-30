import BackModalContainer from "~/components/modal/BackModalContainer";
import handleEditDone from "~/utils/handleEditDone";
import useEditPhoto from "~/hooks/useEditPhoto";
import useAdjustment from "~/hooks/useAdjustment";
import AdjustmentBar from "./AdjustmentBar";

const Adjustment = ({
  fileList,
  setFileList,
  currentSlide,
  setCurrFeature,
}) => {
  const { imageRef, mediaRef } = useEditPhoto();
  const {
    adjustments,
    handleChange,
    handleReset,
    getMediaStyle,
    getMediaCoverBackground,
  } = useAdjustment();

  const handleDone = () => {
    handleEditDone(
      mediaRef,
      imageRef,
      fileList,
      currentSlide,
      setFileList,
      setCurrFeature
    );
  };

  return (
    <BackModalContainer
      onBack={() => setCurrFeature("edit")}
      onDone={handleDone}
    >
      <div className="flex items-center font-ubuntu">
        {/* Media */}
        <div className="h-[58vh] w-[40vw] center">
          <div ref={mediaRef} className="relative">
            <img
              ref={imageRef}
              src={fileList[currentSlide].url}
              alt="Edit"
              className="object-contain w-full h-full"
              style={getMediaStyle()}
            />
            {/* Image cover */}
            <div
              style={{ background: getMediaCoverBackground() }}
              className="absolute w-full h-full top-0 left-0"
            />
          </div>
        </div>
        {/* Inputs */}
        <AdjustmentBar
          adjustments={adjustments}
          handleChange={handleChange}
          handleReset={handleReset}
        />
      </div>
    </BackModalContainer>
  );
};

export default Adjustment;
