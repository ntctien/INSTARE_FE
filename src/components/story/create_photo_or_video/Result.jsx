import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import createStory from "~/api/services/story/createStory";
import { StoryContext } from "~/contexts/StoryContext";
import convertImgUrlToFile from "~/utils/convertImgUrlToFile";

const Result = ({ updateMenuBar }) => {
  const { story, fileName } = useContext(StoryContext);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddToStory = async () => {
    setLoading(true);
    const file = await convertImgUrlToFile(story, fileName);
    await createStory(currentUser.token, file)
      .then(({ data }) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    updateMenuBar(null, null, handleAddToStory, { primaryBtnLoading: loading });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

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
