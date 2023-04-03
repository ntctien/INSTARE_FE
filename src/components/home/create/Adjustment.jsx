import { useContext, useRef, useState } from "react";
import EditContainer from "./EditContainer";
import { FeatureContext } from "../../../contexts/FeatureContext";
import tempImg from "../../../assets/temp1.jpg";

const Adjustment = () => {
  const { setCurrFeature } = useContext(FeatureContext);
  const [adjustments, setAdjustments] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    tint: 0,
  });

  const adjustmentItems = [
    { title: "Brightness", name: "brightness" },
    { title: "Contrast", name: "contrast" },
    { title: "Saturation", name: "saturation"},
    { title: "Temperature", name: "temperature"},
    { title: "Tint", name: "tint" },
  ];

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

  const handleOnChange = (e) => {
    setAdjustments({
      ...adjustments,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleReset = (e) => {
    setAdjustments({ ...adjustments, [e.target.name]: 0 });
  };

  return (
    <EditContainer onBack={() => setCurrFeature("edit")}>
      <div className="flex items-center font-ubuntu">
        {/* Media */}
        <div className="current-media-container">
          <img src={tempImg} alt="Edit" className="current-media" />
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
                  min={-100}
                  max={100}
                  ref={item.ref}
                  value={adjustments[item.name]}
                  onChange={handleOnChange}
                  style={{ backgroundImage: getSliderStyle(adjustments[item.name]) }}
                  className="adjustment-slider"
                />
                <p className="text-16">{adjustments[item.name]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EditContainer>
  );
};

export default Adjustment;
