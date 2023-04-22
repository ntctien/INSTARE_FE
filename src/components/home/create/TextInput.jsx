import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { deleteIcon, doneIcon } from "../../../assets/add_text_icons";

const TextInput = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("\u200B");

  const getInputWidth = (value) =>
    Math.max(...value.split("\n").map((element) => element.length));

  const handleChange = (e) => {
    const input = inputRef.current;
    if (!input) return;

    let value = e.target.value;
    const lines = value.split(/[\r\n]/gm).length;
    if (!value) value = "\u200B";
    setValue(value);

    input.style.width = getInputWidth(value) + 1 + "ch";
    input.style.height = lines * 23 + "px";
  };

  return (
    <Draggable bounds="parent">
      <div className="absolute top-1/2 left-1/2 select-none">
        <div className="outline outline-1 outline-[#3D93DE] cursor-move px-[8px] py-[3px]">
          <textarea
            ref={inputRef}
            value={value}
            onChange={handleChange}
            autoFocus
            className="bg-transparent w-[2ch] h-[2ch] outline-none font-ubuntu font-bold text-20 text-white text-center resize-none overflow-hidden align-middle"
          />
        </div>
        <button className="absolute -top-[10px] -left-[10px]">
          <img src={deleteIcon} alt="Delete" />
        </button>
        <button className="absolute -bottom-[10px] -right-[10px]">
          <img src={doneIcon} alt="Done" />
        </button>
      </div>
    </Draggable>
  );
};

export default TextInput;
