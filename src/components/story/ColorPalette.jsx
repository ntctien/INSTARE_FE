import React from "react";

const ColorPalette = ({ colors, value, onChange }) => {
  return (
    <div className="bg-[#38444E] px-[10px] py-5 rounded-10 grid grid-cols-6 gap-[10px]">
      {colors.map((color, i) => (
        <div
          key={i}
          onClick={() => onChange(color)}
          style={{ background: color }}
          className={`w-[30px] aspect-square rounded-full outline ${
            color === value
              ? "outline-2 outline-blue"
              : "outline-1 outline-grey-dark"
          } hover:outline-blue`}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
