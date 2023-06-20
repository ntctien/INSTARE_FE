import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import {
  playIcon,
  pauseIcon,
  muteIcon,
  unmuteIcon,
  optionIcon,
} from "~/assets/story_icons";
import SliderContainer from "../home/media_slider/SliderContainer";
import getUserStories from "~/api/services/story/getUserStories";
import { useSelector } from "react-redux";
import Avatar from "../home/Avatar";
import { Spin } from "antd";
import getStoryDateString from "~/utils/getStoryDateString";
import readStory from "~/api/services/story/readStory";

const Story = ({
  className,
  currentSlide,
  slider,
  index,
  storiesList,
  userId,
  userInfo,
  setStoryBoxes,
}) => {
  const { currentUser } = useSelector((state) => state.user);
  const [currStory, setCurrStory] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muting, setMuting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);

  const handleReadStory = async (id) => {
    await readStory(currentUser.token, id)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!userId || !currentUser?.token) return;
    const handleGetUserStories = async () => {
      setLoading(true);
      await getUserStories(currentUser.token, userId)
        .then(({ data }) => {
          setStories([...data]);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };
    handleGetUserStories();
  }, [currentUser.token, userId]);

  useEffect(() => {
    if (!stories.length > 0 || loading) return;
    console.log(stories[currStory]);
    handleReadStory(stories[currStory].id);
    if (currStory === stories.length - 1) {
      setStoryBoxes((prev) =>
        prev.map((item, i) => (i === index ? { ...item, read: true } : item))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currStory, index, loading, setStoryBoxes, stories]);

  const handleNextClick = () => {
    if (currStory !== stories.length - 1) {
      setCurrStory((prev) => prev + 1);
    } else if (slider != null) {
      slider.current?.slickGoTo(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (currStory !== 0) {
      setCurrStory((prev) => prev - 1);
    } else if (slider != null) {
      slider.current?.slickGoTo(index - 1);
    }
  };

  return (
    <SliderContainer
      showPrev={currentSlide !== 0 || currStory !== 0}
      showNext={
        currentSlide !== storiesList.length - 1 ||
        currStory !== stories.length - 1
      }
      prevOnClick={handlePrevClick}
      nextOnClick={handleNextClick}
      containerClassName={"w-fit"}
    >
      <div className="w-[27.5vw] h-[90vh] flex items-center justify-center">
        <div
          className={`h-full object-contain object-center aspect-story rounded-10 overflow-hidden relative bg-black ${className}`}
        >
          {/* Story */}
          {!loading && stories[currStory] ? (
            <img
              src={stories[currStory].media}
              alt="Story"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full center">
              <Spin />
            </div>
          )}
          <div className="absolute top-5 px-5 w-full">
            {/* Progress bar */}
            <div className="w-full flex gap-x-[2px]">
              {!loading &&
                stories.map((story, i) => (
                  <ProgressBar
                    key={i}
                    isRunning={i === currStory && playing}
                    value={currStory > i ? 100 : currStory < i ? 0 : null}
                    onFilled={() => {
                      if (currStory !== stories.length - 1) {
                        setCurrStory((prev) => prev + 1);
                      } else {
                        //Handle done
                        slider?.current?.slickGoTo(index + 1);
                      }
                    }}
                  />
                ))}
            </div>
            <div className="between-row mt-[17px]">
              {/* User */}
              <div className="row">
                <Avatar width={"30px"} ava={userInfo.ava} />
                <h2 className="font-medium text-15 text-white ml-[10px] mr-[5px]">
                  {userInfo.username}
                </h2>
                <p className="text-13 text-grey-dark">
                  {stories[currStory] &&
                    getStoryDateString(stories[currStory].createdAt)}
                </p>
              </div>
              {/* Controls */}
              <div className="row gap-x-[5px]">
                {/* Play */}
                <button onClick={() => setPlaying((prev) => !prev)}>
                  <img src={playing ? pauseIcon : playIcon} alt="Play" />
                </button>
                {/* Audio */}
                <button onClick={() => setMuting((prev) => !prev)}>
                  <img src={muting ? muteIcon : unmuteIcon} alt="Audio" />
                </button>
                {/* Options */}
                <button>
                  <img src={optionIcon} alt="Options" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SliderContainer>
  );
};

export default Story;
