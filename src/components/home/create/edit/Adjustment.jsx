import { useState } from "react";
import BackModalContainer from "~/components/modal/BackModalContainer";
import handleEditDone from "~/utils/handleEditDone";
import useEditPhoto from "~/hooks/useEditPhoto";

const adjustmentItems = [
  {
    title: "Brightness",
    name: "brightness",
    level: 2,
    min: -100,
    max: 100,
    addNumber: 100,
  },
  {
    title: "Contrast",
    name: "contrast",
    level: 2,
    min: -100,
    max: 100,
    addNumber: 100,
  },
  {
    title: "Saturation",
    name: "saturate",
    level: 1,
    min: -100,
    max: 100,
    addNumber: 100,
  },
  {
    title: "Temperature",
    name: "temperature",
    level: 1,
    min: -100,
    max: 100,
    addNumber: 100,
  },
  {
    title: "Grayscale",
    name: "grayscale",
    level: 1,
    min: 0,
    max: 100,
    addNumber: 0,
  },
];

const Adjustment = ({
  fileList,
  setFileList,
  currentSlide,
  setCurrFeature,
}) => {
  const { imageRef, mediaRef } = useEditPhoto();
  const [adjustments, setAdjustments] = useState({
    brightness: 0,
    contrast: 0,
    saturate: 0,
    temperature: 0,
    grayscale: 0,
  });

  const getSliderStyle = (value) => {
    if (value >= 0) {
      return `linear-gradient(to right, #D9D9D9 0%, #D9D9D9 50%, #BFB2F3 50%, #BFB2F3 ${
        (value / 200 + 0.5) * 100
      }%, #D9D9D9 ${(value / 200 + 0.5) * 100}%, #D9D9D9 100%)`;
    }
    return `linear-gradient(to right, #D9D9D9 0%, #D9D9D9 ${
      (value / 200 + 0.5) * 100
    }%, #BFB2F3 ${
      (value / 200 + 0.5) * 100
    }%, #BFB2F3 50%, #D9D9D9 50%, #D9D9D9 100%)`;
  };

  const getMediaStyle = () => {
    const img = new Image();
    img.src = fileList[currentSlide].url;
    const realWidth = img.width;
    const realHeight = img.height;

    return {
      filter: adjustmentItems
        .map((item) => {
          return item.name === "temperature"
            ? ""
            : `${item.name}(${
                adjustments[item.name] / item.level + item.addNumber
              }%)`;
        })
        .join(" "),
      width: realWidth < realHeight ? "fit-content" : "100%",
      height: realWidth < realHeight ? "100%" : "fit-content",
    };
  };

  const getMediaCoverBackground = () => {
    if (adjustments.temperature > 0) {
      return "rgba(255,255,0," + Math.abs(adjustments.temperature) / 400 + ")";
    }
    return "rgba(0, 0, 255," + Math.abs(adjustments.temperature) / 400 + ")";
  };

  const handleOnChange = (e) => {
    setAdjustments({
      ...adjustments,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleReset = (e) => {
    setAdjustments({ ...adjustments, [e.target.name]: 0 });
  };

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
    <BackModalContainer onBack={() => setCurrFeature("edit")} onDone={handleDone}>
      <div className="flex items-center font-ubuntu">
        {/* Media */}
        <div className="h-[58vh] w-[40vw] center">
          <div ref={mediaRef} className="relative">
            <img
              ref={imageRef}
              src={fileList[currentSlide].url}
              alt="Edit"
              className="object-contain"
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
        <div className="flex flex-col justify-evenly bg-white px-5 h-[63vh] w-[25vw]">
          {adjustmentItems.map((item, i) => (
            <div key={i}>
              <div className="row justify-between">
                <h3 className="text-16">{item.title}</h3>
                {adjustments[item.name] !== 0 && (
                  <button
                    name={item.name}
                    onClick={handleReset}
                    className="text-[14px] leading-[16px] text-[#3D93DE]"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className="row gap-x-[10px] mt-4">
                <input
                  type="range"
                  name={item.name}
                  min={item.min}
                  max={item.max}
                  value={adjustments[item.name]}
                  onChange={handleOnChange}
                  style={{
                    backgroundImage: getSliderStyle(adjustments[item.name]),
                  }}
                  className="adjustment-range"
                />
                <p className="text-16">{adjustments[item.name]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackModalContainer>
  );
};

export default Adjustment;
