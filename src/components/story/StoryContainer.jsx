import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoryItem from "./StoryItem";
import SliderContainer from "../home/media_slider/SliderContainer";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  arrows: false,
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

const StoryContainer = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SliderContainer
      slider={slider}
      currentSlide={currentSlide}
      mediaList={stories}
      containerClassName='story-slider-container'
    >
      <Slider
        {...settings}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="w-[800px] story-container"
      >
        {stories.map((story, i) => (
          <StoryItem key={i} />
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default StoryContainer;
