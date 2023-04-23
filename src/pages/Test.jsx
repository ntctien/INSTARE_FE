import React from "react";
import TextInput from "~/components/home/create/edit/add_text/TextInput";
import tempImage from '~/assets/temp1.jpg';

const Test = () => {
  return (
    <div className="w-screen h-screen center overflow-hidden">
      <div className="w-fit h-[500px] bg-red-400 relative overflow-clip">
        <img src={tempImage} alt="temp" className="w-full h-full object-contain"/>
        <TextInput/>
      </div>
    </div>
  );
};

export default Test;
