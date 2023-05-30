import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "~/components/story/ContentWrapper";
import CreateStoryItem from "~/components/story/CreateStoryItem";
import LeftBar from "~/components/story/LeftBar";
import { photoIcon, textIcon } from "~/assets/story_icons";
import { StoryContext } from "~/contexts/StoryContext";

const CreateStory = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const { setStory } = useContext(StoryContext);

  const handleCreatePhotoOrVideoStory = () => {
    inputRef.current.click();
  };

  const handleInputChange = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }

    const url = URL.createObjectURL(fileObj);
    setStory(url);

    e.target.value = null;
    navigate("photo-or-video");
  };

  return (
    <>
      {/* Left bar */}
      <LeftBar />
      {/* Content */}
      <ContentWrapper>
        <div className="flex justify-center gap-x-[50px] h-[70vh] max-w-[60%]">
          {/* Create photo/video story */}
          <CreateStoryItem
            onClick={handleCreatePhotoOrVideoStory}
            background={"linear-gradient(162.44deg, #F5E875 0%, #FE8F50 100%)"}
            icon={photoIcon}
            label={"Create photo/video story"}
          />
          {/* Create text story */}
          <CreateStoryItem
            onClick={() => navigate("text")}
            background={"linear-gradient(162.44deg, #B73793 0%, #EDA9DE 100%)"}
            icon={textIcon}
            label={"Create text story"}
          />
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple={false}
          hidden
          onChange={handleInputChange}
        />
      </ContentWrapper>
    </>
  );
};

export default CreateStory;
