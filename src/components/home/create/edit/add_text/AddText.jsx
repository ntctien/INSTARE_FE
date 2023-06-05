import { useEffect, useState } from "react";
import BackModalContainer from "~/components/modal/BackModalContainer";
import TextInput from "./TextInput";
import FontPicker from "./FontPicker";
import { fontIcon, sizeIcon, colorIcon } from "~/assets/add_text_icons";
import SizePicker from "./SizePicker";
import ColorPicker from "./ColorPicker";
import handleEditDone from "~/utils/handleEditDone";
import useEditPhoto from "~/hooks/useEditPhoto";
import AddTextButton from "./AddTextButton";
import useAddText from "~/hooks/useAddText";
import useClickOutside from "~/hooks/useClickOutside";

const AddText = ({ setCurrFeature, fileList, currentSlide, setFileList }) => {
  const { imageRef, mediaRef } = useEditPhoto();
  const {
    handleAddText,
    handleDeleteText,
    handleDone,
    currText,
    setCurrText,
    textInputs,
    getPickerProps,
  } = useAddText(() =>
    handleEditDone(
      mediaRef,
      imageRef,
      fileList,
      currentSlide,
      setFileList,
      setCurrFeature
    )
  );
  const { clickOutsideRef } = useClickOutside(() => setCurrPicker(null));
  const [currPicker, setCurrPicker] = useState(null);

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
          ref={currPicker === "font" && clickOutsideRef}
          {...getPickerProps("font")}
        />
      ),
    },
    {
      id: "size",
      title: "Size",
      icon: sizeIcon,
      picker: (
        <SizePicker
          ref={currPicker === "size" && clickOutsideRef}
          {...getPickerProps("size")}
        />
      ),
    },
    {
      id: "color",
      title: "Color",
      icon: colorIcon,
      picker: (
        <ColorPicker
          ref={currPicker === "color" && clickOutsideRef}
          {...getPickerProps("color")}
        />
      ),
    },
  ];

  return (
    <BackModalContainer
      onBack={() => setCurrFeature("edit")}
      onDone={handleDone}
    >
      <div className="edit-feature relative">
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
            <AddTextButton onClick={handleAddText} />
          )}
        </div>
      </div>
    </BackModalContainer>
  );
};

export default AddText;
