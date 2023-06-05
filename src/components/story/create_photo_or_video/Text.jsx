import { useContext, useEffect, useRef } from "react";
import AddTextButton from "~/components/home/create/edit/add_text/AddTextButton";
import { StoryContext } from "~/contexts/StoryContext";
import SelectFont from "../SelectFont";
import SizeEditor from "~/components/text_editor/SizeEditor";
import ColorPalette from "../ColorPalette";
import textColors from "~/constants/textColors";
import useAddText from "~/hooks/useAddText";
import TextInput from "~/components/home/create/edit/add_text/TextInput";

const Text = ({ handleEditDone, updateMenuBar }) => {
  const { story } = useContext(StoryContext);
  const mediaRef = useRef(null);
  const imageRef = useRef(null);
  const {
    handleAddText,
    handleDeleteText,
    handleDone,
    currText,
    setCurrText,
    textInputs,
    getPickerProps,
  } = useAddText(() => handleEditDone(mediaRef, imageRef));

  useEffect(() => {
    updateMenuBar(mediaRef, imageRef, handleDone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-start gap-x-[60px] h-[70vh]">
      {/* Left side */}
      <div className="create-story-media-container">
        <div ref={mediaRef} className="relative overflow-clip">
          <img
            ref={imageRef}
            src={story}
            alt="Edit"
            className="create-story-media"
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
      {/* Right side */}
      <div>
        <AddTextButton
          bgColor={"#38444E"}
          iconFill={"white"}
          onClick={handleAddText}
          className={"border-2 border-white mx-auto"}
        />
        {/* Edit text */}
        <div
          className={`create-text-menu mt-[27px] flex flex-col gap-y-5 bg-story p-[25px] rounded-10 ${
            currText == null && "opacity-50 pointer-events-none"
          }`}
        >
          {/* Select text font */}
          <SelectFont {...getPickerProps("font")} />
          {/* Select text size */}
          <div>
            <SizeEditor {...getPickerProps("size")} selectedColor={"#D6D6D6"} />
          </div>
          {/* Select text color */}
          <ColorPalette
            {...getPickerProps("color")}
            colors={textColors}
            className={"select-text-color"}
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
