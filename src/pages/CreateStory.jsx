import ContentWrapper from "~/components/story/ContentWrapper";
import CreateStoryItem from "~/components/story/CreateStoryItem";
import LeftBar from "~/components/story/LeftBar";
import { photoIcon, textIcon } from "~/assets/story_icons";

const CreateStory = () => {
  return (
    <>
      {/* Left bar */}
      <LeftBar />
      {/* Content */}
      <ContentWrapper>
        <div className="flex justify-center gap-x-[50px] h-[70vh] max-w-[60%]">
          {/* Create photo/video story */}
          <CreateStoryItem
            path={"photo-or-video"}
            background={"linear-gradient(162.44deg, #F5E875 0%, #FE8F50 100%)"}
            icon={photoIcon}
            label={"Create photo/video story"}
          />
          {/* Create text story */}
          <CreateStoryItem
            path={"text"}
            background={"linear-gradient(162.44deg, #B73793 0%, #EDA9DE 100%)"}
            icon={textIcon}
            label={"Create text story"}
          />
        </div>
      </ContentWrapper>
    </>
  );
};

export default CreateStory;
