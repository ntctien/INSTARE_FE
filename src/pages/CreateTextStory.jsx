import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ColorPalette from "~/components/story/ColorPalette";
import MenuBar from "~/components/story/MenuBar";
import Select from "~/components/story/Select";
import SelectCircle from "~/components/story/SelectCircle";
import FontTable from "~/components/text_editor/FontTable";
import SizeEditor from "~/components/text_editor/SizeEditor";
import storyBackgroundColors from "~/constants/storyBackgroundColors";
import textColors from "~/constants/textColors";

const CreateTextStory = () => {
  const { setMenuBar } = useOutletContext();

  const menuBar = (
    <MenuBar primaryBtnLabel={"Add to story"}>
      <div className="mx-5 create-text-menu flex flex-col gap-y-5">
        <textarea
          placeholder="Type your content here..."
          className="h-[27.7vh] focus:outline-none px-[15px] py-5 placeholder:text-white placeholder:opacity-50 resize-none"
        />
        <Select
          value={"Ubuntu"}
          valueClassName={`font-['${"Ubuntu"}']`}
          prefix={
            <p className={`font-['${"Ubuntu"}'] text-center w-[30px]`}>Aa</p>
          }
          dropDownBox={
            <FontTable
              value={"Ubuntu"}
              background={"#38444E"}
              position={"top-0 -right-2 translate-x-full"}
            />
          }
        />
        <div>
          <SizeEditor size={20} selectedColor={"#D6D6D6"} />
        </div>
        <Select
          value={"Text color"}
          valueClassName={"font-ubuntu"}
          prefix={<SelectCircle selected background={"#FFFFFF"} />}
          dropDownBox={<ColorPalette colors={textColors} />}
        />
        <Select
          value={"Background color"}
          valueClassName={"font-ubuntu"}
          prefix={
            <SelectCircle
              selected
              background={"linear-gradient(45deg, #B73793 0%, #EDA9DE 100%)"}
            />
          }
          dropDownBox={<ColorPalette colors={storyBackgroundColors} />}
        />
      </div>
    </MenuBar>
  );

  useEffect(() => {
    setMenuBar(menuBar);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(162.44deg, #B73793 0%, #EDA9DE 100%)",
      }}
      className="h-[85%] aspect-story rounded-10 center"
    >
      <p className="font-medium text-24 text-white text-center w-[80%]">
        Your content will display here
      </p>
    </div>
  );
};

export default CreateTextStory;
