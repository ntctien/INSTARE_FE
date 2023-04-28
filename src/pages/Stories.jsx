import { useRef, useState } from "react";
import Slider from "react-slick";
import Story from "~/components/story/Story";
import StoryItem from "~/components/story/StoryItem";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  focusOnSelect: true,
};

const stories = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const Stories = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full h-full center">
      <Slider
        {...settings}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="w-screen"
      >
        <Story/>
        {stories.map((story, i) => (
          <StoryItem key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default Stories;
