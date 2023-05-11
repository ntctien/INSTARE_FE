import React from "react";
import LogoAndCloseButton from "./LogoAndCloseButton";

const LeftBar = ({children}) => {
  return (
    <div className="bg-[#96CAF726] w-[340px] rounded-r-15 pt-[17px] pb-[40px] flex flex-col">
      <LogoAndCloseButton className={"ml-6"} />
      {children}
    </div>
  );
};

export default LeftBar;
