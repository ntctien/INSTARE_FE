import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { deleteIcon, doneIcon } from "~/assets/add_text_icons";

const TextInput = ({
  handleDeleteText,
  index,
  currText,
  setCurrText,
  imageContainerRef,
  font,
  size,
  color,
}) => {
  const inputRef = useRef(null);
  const inputContainerRef = useRef(null);
  const [value, setValue] = useState("\u200B");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const image = imageContainerRef.current;
    if (!image) return;
    setPosition({ x: image.clientWidth / 2, y: image.clientHeight / 2 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageContainerRef.current]);

  const edit = currText === index;

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

  const getUpdatedHeight = (input, value) => {
    const lineHeight = window
      .getComputedStyle(input, null)
      .getPropertyValue("line-height");
    const lineNumber = value.split(/\r\n|\r|\n/).length;
    return parseInt(lineHeight.replace("px", "")) * lineNumber + "px";
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
      input.style.height = getUpdatedHeight(input, value);
  };

  const handleClick = () => {
    setCurrText(index);
  };

  useEffect(() => {
    const input = inputRef.current;
    const imageContainer = imageContainerRef.current;
    const inputContainer = inputContainerRef.current;
    if (!input) return;
    if (!exceedImageHeight(imageContainer, inputContainer))
      input.style.height = getUpdatedHeight(input, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  console.log(imageContainerRef.current?.clientWidth);

  return (
    <Rnd
      disableDragging={!edit}
      bounds={"parent"}
      enableResizing={false}
      position={{ ...position }}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
    >
      <div ref={inputContainerRef} className="select-none">
        {/* Input */}
        <div
          onClick={handleClick}
          className={`px-[8px] py-[3px] ${
            edit
              ? "outline outline-1 outline-[#3D93DE] cursor-move"
              : "cursor-pointer"
          }`}
        >
          <textarea
            ref={inputRef}
            value={value}
            onChange={handleChange}
            autoFocus
            readOnly={!edit}
            style={{
              fontFamily: font,
              fontSize: size + "px",
              color: color,
              cursor: !edit && "pointer",
            }}
            className="bg-transparent w-[2ch] h-[2ch] outline-none font-bold text-white text-center resize-none overflow-hidden align-middle"
          />
        </div>
        {edit && (
          <>
            {/* Delete button */}
            <button
              onClick={() => handleDeleteText(index)}
              className="absolute -top-[10px] -left-[10px]"
            >
              <img src={deleteIcon} alt="Delete" />
            </button>
            {/* Done button */}
            <button
              onClick={() => setCurrText(null)}
              className="absolute -bottom-[10px] -right-[10px]"
            >
              <img src={doneIcon} alt="Done" />
            </button>
          </>
        )}
      </div>
    </Rnd>
  );
};

export default TextInput;
