import { useRef, useState } from "react";
import Slider from "react-slick";
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

const stories = [
  null,
  null,
  null,
  null,
];

const Stories = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full h-full center story">
      <Slider
        {...settings}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="w-screen px-[calc(47/1440*100vw)]"
      >
        {stories.map((story, i) =>
          i === currentSlide ? (
            <div className="mx-[calc(95/1440*100vw)]">
              <Story index={i} currentSlide={currentSlide} slider={slider} storiesList={stories}/>
            </div>
          ) : (
            <div className="story-item">
              <StoryItem
                key={i}
                textColor={'#FFFFFF'}
                onClick={() => slider.current?.slickGoTo(i, true)}
              />
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Stories;
