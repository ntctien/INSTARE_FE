import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import MenuBar from "~/components/story/MenuBar";
import Select from "~/components/story/Select";
import SelectCircle from "~/components/story/SelectCircle";

const CreateTextStory = () => {
  const { setMenuBar } = useOutletContext();

  const menuBar = (
    <MenuBar>
      <div className="mx-5 create-text-menu flex flex-col gap-y-5">
        <textarea
          placeholder="Type your content here..."
          className="h-[27.7vh] focus:outline-none px-[15px] py-5 placeholder:text-white placeholder:opacity-50 resize-none"
        />
        <Select
          value={"Ubuntu"}
          valueClassName={`font-['${"Ubuntu"}']`}
          prefix={<p className={`font-['${"Ubuntu"}'] text-center w-[30px]`}>Aa</p>}
        />
        <Select
          value={"Text color"}
          valueClassName={"font-ubuntu"}
          prefix={<SelectCircle selected background={"#FFFFFF"} />}
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
        />
      </div>
    </MenuBar>
  );

  useEffect(() => {
    setMenuBar(menuBar);
  }, []);

  return <div>CreateTextStory</div>;
};

export default CreateTextStory;
