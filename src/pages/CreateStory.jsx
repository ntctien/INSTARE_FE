import { photoIcon, textIcon } from "~/assets/story_icons";

const CreateStory = () => {
  return (
    <div className="flex gap-x-[50px] h-[560px]">
      {/* Create photo/video story */}
      <div
        style={{
          background: "linear-gradient(162.44deg, #F5E875 0%, #FE8F50 100%)",
        }}
        className="create-story"
      >
        <img src={photoIcon} alt="Media"/>
        <p>Create photo/video story</p>
      </div>
      {/* Create text story */}
      <div
        style={{
          background: "linear-gradient(162.44deg, #B73793 0%, #EDA9DE 100%)",
        }}
        className="create-story"
      >
        <img src={textIcon} alt="Media"/>
        <p>Create text story</p>
      </div>
    </div>
  );
};

export default CreateStory;
