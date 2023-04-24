import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { deleteIcon, doneIcon } from "~/assets/add_text_icons";

const TextInput = ({
  handleDeleteText,
  index,
  imageContainerRef,
  font,
  size,
}) => {
  const inputRef = useRef(null);
  const inputContainerRef = useRef(null);
  const [value, setValue] = useState("\u200B");

  const getInputWidth = (value) =>
    Math.max(...value.split("\n").map((element) => element.length));

  const exceedImageWidth = (imageContainer, inputContainer) => {
    if (!imageContainer || !inputContainer) return false;

    if (imageContainer.offsetWidth - inputContainer.offsetWidth > 16)
      return false;
    return true;
  };

  const exceedImageHeight = (imageContainer, inputContainer) => {
    if (!imageContainer || !inputContainer) return false;

    if (imageContainer.offsetHeight - inputContainer.scrollHeight > 16)
      return false;
    return true;
  };

  const handleChange = (e) => {
    const input = inputRef.current;
    const imageContainer = imageContainerRef.current;
    const inputContainer = inputContainerRef.current;
    if (!input) return;

    let value = e.target.value;
    if (!value) value = "\u200B";
    setValue(value);

    if (!exceedImageWidth(imageContainer, inputContainer))
      input.style.width = getInputWidth(value) + 1 + "ch";
    if (!exceedImageHeight(imageContainer, inputContainer))
      input.style.height = input.scrollHeight + "px";
  };

  return (
    <Draggable bounds="parent">
      <div
        ref={inputContainerRef}
        className="absolute top-1/2 left-1/2 select-none"
      >
        {/* Input */}
        <div className="outline outline-1 outline-[#3D93DE] cursor-move px-[8px] py-[3px]">
          <textarea
            ref={inputRef}
            value={value}
            onChange={handleChange}
            autoFocus
            style={{
              fontFamily: font,
              fontSize: size+'px',
            }}
            className="bg-transparent w-[2ch] h-[2ch] outline-none font-bold text-white text-center resize-none overflow-hidden align-middle"
          />
        </div>
        {/* Delete button */}
        <button
          onClick={() => handleDeleteText(index)}
          className="absolute -top-[10px] -left-[10px]"
        >
          <img src={deleteIcon} alt="Delete" />
        </button>
        {/* Done button */}
        <button className="absolute -bottom-[10px] -right-[10px]">
          <img src={doneIcon} alt="Done" />
        </button>
      </div>
    </Draggable>
  );
};

export default TextInput;
