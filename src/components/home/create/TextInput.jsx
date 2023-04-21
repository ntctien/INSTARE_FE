import { useState } from "react";
import { deleteIcon, doneIcon } from "../../../assets/add_text_icons";

const TextInput = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: position.x + e.movementX, y: position.y + e.movementY });
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ position: "absolute", top: position.y, left: position.x }}
    >
      <div className="outline outline-1 outline-[#3D93DE] cursor-move px-[8px] py-[3px]">
        <input
          className="w-[57px] bg-transparent outline-none font-ubuntu font-bold text-[20px] text-white text-center"
          value={"meow"}
        />
      </div>
      <button className="absolute -top-[10px] -left-[10px]">
        <img src={deleteIcon} alt="Delete" />
      </button>
      <button className="absolute -bottom-[10px] -right-[10px]">
        <img src={doneIcon} alt="Done" />
      </button>
    </div>
  );
};

export default TextInput;
