import { Link } from "react-router-dom";
import { photoIcon, textIcon } from "~/assets/story_icons";
import ContentWrapper from "~/components/story/ContentWrapper";
import LeftBar from "~/components/story/LeftBar";

const CreateStory = () => {
  return (
    <>
      {/* Left bar */}
      <LeftBar />
      {/* Content */}
      <ContentWrapper>
        <div className="flex justify-center gap-x-[50px] h-[70vh] max-w-[60%]">
          {/* Create photo/video story */}
          <div
            style={{
              background:
                "linear-gradient(162.44deg, #F5E875 0%, #FE8F50 100%)",
            }}
            className="create-story"
          >
            <img src={photoIcon} alt="Media" />
            <p>Create photo/video story</p>
          </div>
          {/* Create text story */}
          <Link
            to={"text-story"}
            style={{
              background:
                "linear-gradient(162.44deg, #B73793 0%, #EDA9DE 100%)",
            }}
            className="create-story"
          >
            <img src={textIcon} alt="Media" />
            <p>Create text story</p>
          </Link>
        </div>
      </ContentWrapper>
    </>
  );
};

export default CreateStory;
