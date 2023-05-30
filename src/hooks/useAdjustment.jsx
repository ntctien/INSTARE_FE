import { useState } from "react";
import adjustmentItems from "~/constants/adjustmentItems";

const useAdjustment = () => {
  const [adjustments, setAdjustments] = useState({
    brightness: 0,
    contrast: 0,
    saturate: 0,
    temperature: 0,
    grayscale: 0,
  });

  const getMediaStyle = () => {
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
    };
  };

  const getMediaCoverBackground = () => {
    if (adjustments.temperature > 0) {
      return "rgba(255,255,0," + Math.abs(adjustments.temperature) / 400 + ")";
    }
    return "rgba(0, 0, 255," + Math.abs(adjustments.temperature) / 400 + ")";
  };

  const handleChange = (e) => {
    setAdjustments({
      ...adjustments,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleReset = (e) => {
    setAdjustments({ ...adjustments, [e.target.name]: 0 });
  };

  const adjustmentBarProps = { adjustments, handleChange, handleReset };

  return {
    adjustmentBarProps,
    getMediaStyle,
    getMediaCoverBackground,
  };
};

export default useAdjustment;
