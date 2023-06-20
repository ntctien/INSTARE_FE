import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import LogoAndCloseButton from "~/components/story/LogoAndCloseButton";
import Story from "~/components/story/Story";
import StoryItem from "~/components/story/StoryItem";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  variableWidth: true,
};

const Stories = () => {
  const slider = useRef(null);
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [storyBoxes, setStoryBoxes] = useState([]);

  const { stories, currIndex } = location.state;

  useEffect(() => {
    setStoryBoxes([...stories]);
  }, [stories]);

  useEffect(() => {
    if (currIndex) slider.current?.slickGoTo(currIndex, true);
  }, [currIndex]);

  return (
    <div className="w-full h-full center stories">
      <Slider
        {...settings}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="w-screen px-[calc(47/1440*100vw)]"
      >
        {storyBoxes.map((story, i) =>
          i === currentSlide ? (
            <div key={i} className="mx-[calc(95/1440*100vw)]">
              <Story
                index={i}
                currentSlide={currentSlide}
                slider={slider}
                storiesList={storyBoxes}
                userId={storyBoxes[i].id}
                userInfo={storyBoxes[i]}
                setStoryBoxes={setStoryBoxes}
              />
            </div>
          ) : (
            <div key={i} className="story-item">
              <StoryItem
                key={i}
                textColor={"#FFFFFF"}
                borderWidth={4}
                read={story.read}
                story={story}
                onClick={() => slider.current?.slickGoTo(i, true)}
              />
            </div>
          )
        )}
      </Slider>
      <LogoAndCloseButton className={"absolute top-[17px] left-[24px]"} />
    </div>
  );
};

export default Stories;
