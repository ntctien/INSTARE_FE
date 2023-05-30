import React from "react";
import adjustmentItems from "~/constants/adjustmentItems";

const AdjustmentBar = ({ adjustments, handleChange, handleReset, style }) => {
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

  return (
    <div
      style={style}
      className="flex flex-col h-[63vh] w-[25vw] font-ubuntu"
    >
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
              onChange={handleChange}
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
  );
};

export default AdjustmentBar;
