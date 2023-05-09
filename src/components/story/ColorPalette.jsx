import React from "react";

const ColorPalette = ({colors}) => {
  return (
    <div className="bg-[#38444E] px-[10px] py-5 rounded-10 grid grid-cols-6 gap-[10px]">
      {colors.map((color, i) => (
        <div
          key={i}
          style={{ background: color }}
          className="w-[30px] aspect-square rounded-full outline outline-1 outline-grey-dark hover:outline-blue"
        />
      ))}
    </div>
  );
};

export default ColorPalette;
