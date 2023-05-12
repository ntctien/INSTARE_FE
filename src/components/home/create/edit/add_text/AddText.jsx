import { useEffect, useRef, useState } from "react";
import BackModalContainer from "~/components/modal/BackModalContainer";
import TextInput from "./TextInput";
import FontPicker from "./FontPicker";
import {
  addIcon,
  fontIcon,
  sizeIcon,
  colorIcon,
} from "~/assets/add_text_icons";
import SizePicker from "./SizePicker";
import ColorPicker from "./ColorPicker";
import handleEditDone from "~/utils/handleEditDone";
import useEditPhoto from "~/hooks/useEditPhoto";

const AddText = ({ setCurrFeature, fileList, currentSlide, setFileList }) => {
  const { imageRef, mediaRef } = useEditPhoto();
  const [textInputs, setTextInputs] = useState([]);
  const [currPicker, setCurrPicker] = useState(null);
  const [currText, setCurrText] = useState(null);

  useEffect(() => {
    if (currPicker === "font" || currPicker === "color") setCurrPicker(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textInputs]);

  const editOptions = [
    {
      id: "font",
      title: "Font",
      icon: fontIcon,
      picker: (
        <FontPicker
          font={textInputs[currText]?.font}
          setTextInputs={setTextInputs}
          textInputs={textInputs}
          currText={currText}
        />
      ),
    },
    {
      id: "size",
      title: "Size",
      icon: sizeIcon,
      picker: (
        <SizePicker
          size={textInputs[currText]?.size}
          setTextInputs={setTextInputs}
          textInputs={textInputs}
          currText={currText}
        />
      ),
    },
    {
      id: "color",
      title: "Color",
      icon: colorIcon,
      picker: (
        <ColorPicker
          color={textInputs[currText]?.color}
          setTextInputs={setTextInputs}
          textInputs={textInputs}
          currText={currText}
        />
      ),
    },
  ];

  const handleAddText = () => {
    setTextInputs([
      ...textInputs,
      { font: "Ubuntu", size: 20, color: "#FFFFFF" },
    ]);
    setCurrText(textInputs.length);
  };

  const handleDeleteText = (index) => {
    const newInputs = [...textInputs];
    newInputs.splice(index, 1);
    setTextInputs(newInputs);
    setCurrText(null);
  };

  const handleDone = () => {
    setCurrText(null);
    handleEditDone(
      mediaRef,
      imageRef,
      fileList,
      currentSlide,
      setFileList,
      setCurrFeature
    );
  };

  return (
    <BackModalContainer onBack={() => setCurrFeature("edit")} onDone={handleDone}>
      <div
        onClick={() => setCurrPicker(null)}
        className="edit-feature relative"
      >
        {/* Media */}
        <div className="current-media-container">
          <div ref={mediaRef} className="relative overflow-clip">
            <img
              ref={imageRef}
              src={fileList[currentSlide].url}
              draggable={false}
              alt="Edit"
              className="current-media"
            />
            {textInputs.map((textInput, i) => (
              <TextInput
                key={i}
                index={i}
                handleDeleteText={handleDeleteText}
                imageContainerRef={mediaRef}
                currText={currText}
                setCurrText={setCurrText}
                {...textInput}
              />
            ))}
          </div>
        </div>
        {/* Edit bar */}
        <div className="edit-bar mt-[19px]">
          {currText !== null ? (
            <div className="row gap-x-[60px] font-ubuntu">
              {editOptions.map((option, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrPicker(option.id);
                  }}
                  className="relative"
                >
                  <button className="flex flex-col items-center hover:bg-[rgba(0,0,0,0.05)] p-[10px] rounded-10">
                    <img src={option.icon} alt="Edit text" />
                    <h3 className="text-20 mt-1">{option.title}</h3>
                  </button>
                  {currPicker === option.id && option.picker}
                </div>
              ))}
            </div>
          ) : (
            <button
              onClick={handleAddText}
              className="row gap-x-[5px] bg-grey p-[5px] rounded-5"
            >
              <img src={addIcon} alt="Add text" />
              <h3 className="font-medium text-[20px] leading-6">
                CLICK TO ADD TEXT
              </h3>
            </button>
          )}
        </div>
      </div>
    </BackModalContainer>
  );
};

export default AddText;
