import { useRef, useState } from "react";
import EditContainer from "../EditContainer";
import TextInput from "./TextInput";
import {
  addIcon,
  fontIcon,
  sizeIcon,
  colorIcon,
} from "~/assets/add_text_icons";

const editOptions = [
  { title: "Font", icon: fontIcon },
  { title: "Size", icon: sizeIcon },
  { title: "Color", icon: colorIcon },
];

const AddText = ({ setCurrFeature, fileList, currentSlide }) => {
  const imageContainerRef = useRef(null);
  const [textInputs, setTextInputs] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleAddText = () => {
    setTextInputs([
      ...textInputs,
      <TextInput
        key={textInputs.length}
        index={textInputs.length}
        handleDeleteText={handleDeleteText}
        imageContainerRef={imageContainerRef}
      />,
    ]);
    setEditMode(true);
  };

  const handleDeleteText = (index) => {
    setTextInputs(textInputs.splice(index, 1));
    setEditMode(false);
  };

  return (
    <EditContainer onBack={() => setCurrFeature("edit")}>
      <div className="pt-[13px] w-[600px] relative">
        {/* Media */}
        <div ref={imageContainerRef} className="h-[58vh] w-fit max-w-[40vw] mx-auto relative overflow-clip">
          <img
            src={fileList[currentSlide].url}
            draggable={false}
            alt="Edit"
            className="current-media"
          />
          {textInputs}
        </div>
        {/* Edit bar */}
        <div className="edit-bar mt-[19px]">
          {editMode ? (
            <div className="row gap-x-[60px] font-ubuntu">
              {editOptions.map((option, i) => (
                <button key={i} className="flex flex-col items-center hover:bg-[rgba(0,0,0,0.05)] p-[10px] rounded-10">
                  <img src={option.icon} alt="Edit text" />
                  <h3 className="text-20 mt-1">{option.title}</h3>
                </button>
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
    </EditContainer>
  );
};

export default AddText;
