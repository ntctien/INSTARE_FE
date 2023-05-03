import { useState } from "react";
import ProgressBar from "./ProgressBar";
import {
  playIcon,
  pauseIcon,
  muteIcon,
  unmuteIcon,
  optionIcon,
} from "~/assets/story_icons";
import tempImg from "~/assets/storyTemp.jpg";
import tempImg2 from "~/assets/temp1.jpg";
import SliderContainer from "../home/media_slider/SliderContainer";

const stories = [tempImg2, tempImg];

const Story = ({ className, currentSlide, slider, index, storiesList }) => {
  const [currStory, setCurrStory] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muting, setMuting] = useState(true);

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
          className={`h-full object-contain object-center aspect-[9/16] rounded-10 overflow-hidden relative ${className}`}
        >
          {/* Story */}
          <img
            src={stories[currStory]}
            alt="Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-5 px-5 w-full">
            {/* Progress bar */}
            <div className="w-full flex gap-x-[2px]">
              {stories.map((story, i) => (
                <ProgressBar
                  key={i}
                  isRunning={i === currStory && playing}
                  value={currStory > i ? 100 : currStory < i ? 0 : null}
                  onFilled={() => {
                    if (currStory !== stories.length - 1) {
                      setCurrStory((prev) => prev + 1);
                    } else {
                      //Handle done
                    }
                  }}
                />
              ))}
            </div>
            <div className="between-row mt-[17px]">
              {/* User */}
              <div className="row">
                <div className="w-[30px] aspect-square rounded-full bg-grey"></div>
                <h2 className="font-medium text-15 text-white ml-[10px] mr-[5px]">
                  username
                </h2>
                <p className="text-13 text-grey-dark">5h</p>
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
