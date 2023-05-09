import React from "react";

const MenuBar = ({children, primaryBtnLabel}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-center">{children}</div>
      <div className="h-[50px] flex justify-between font-medium text-white mx-[15px]">
        <button className="w-[125px] bg-[#38444E] rounded-10 border-1 border-white hover:brightness-110">
          Discard
        </button>
        <button
          style={{
            background: "linear-gradient(91.17deg, #96CAF7 0%, #BFB2F3 100%)",
          }}
          className="w-[175px] rounded-10 hover:brightness-95"
        >
          {primaryBtnLabel ?? 'Save change'}
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
