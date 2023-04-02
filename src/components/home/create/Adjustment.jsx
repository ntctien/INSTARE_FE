import { useContext, useRef, useState } from "react";
import EditContainer from "./EditContainer";
import { FeatureContext } from "../../../contexts/FeatureContext";
import tempImg from "../../../assets/temp1.jpg";

const Adjustment = () => {
  const { setCurrFeature } = useContext(FeatureContext);
  const brightnessRef = useRef(null);
  const contrastRef = useRef(null);
  const saturationRef = useRef(null);
  const temperatureRef = useRef(null);
  const tintRef = useRef(null);
  const [adjustments, setAdjustments] = useState({
    brightness: 0,
    contrast: 0,
    saturation: 0,
    temperature: 0,
    tint: 0,
  });

  const adjustmentItems = [
    { title: "Brightness", name: "brightness", ref: brightnessRef },
    { title: "Contrast", name: "contrast", ref: contrastRef },
    { title: "Saturation", name: "saturation", ref: saturationRef },
    { title: "Temperature", name: "temperature", ref: temperatureRef },
    { title: "Tint", name: "tint", ref: tintRef },
  ];

  const updateSliderStyle = (ref, value) => {
    const slider = ref.current;
    if (!slider) return;
    if (value >= 0) {
      slider.style.backgroundImage = `linear-gradient(to right, #D9D9D9 0%, #D9D9D9 50%, #BFB2F3 50%, #BFB2F3 ${
        (value / 200 + 0.5) * 100
      }%, #D9D9D9 ${(value / 200 + 0.5) * 100}%, #D9D9D9 100%)`;
    } else {
      slider.style.backgroundImage = `linear-gradient(to right, #D9D9D9 0%, #D9D9D9 ${
        (value / 200 + 0.5) * 100
      }%, #BFB2F3 ${
        (value / 200 + 0.5) * 100
      }%, #BFB2F3 50%, #D9D9D9 50%, #D9D9D9 100%)`;
    }
  };

  const handleOnChange = (e, ref) => {
    const value = parseInt(e.target.value);
    setAdjustments({
      ...adjustments,
      [e.target.name]: value,
    });
    updateSliderStyle(ref, value);
  };

  const handleReset = (e, ref) => {
    setAdjustments({ ...adjustments, [e.target.name]: 0 });
    updateSliderStyle(ref, 0);
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
                    onClick={(e) => handleReset(e, item.ref)}
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
                  onChange={(e) => handleOnChange(e, item.ref)}
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
