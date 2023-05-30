import { useContext } from "react";
import { StoryContext } from "~/contexts/StoryContext";

const Result = () => {
  const { story } = useContext(StoryContext);

  return (
    <div className="story">
      <img
        src={story}
        alt="Story"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Result;
