import { useRef, useState } from "react";
import Slider from "react-slick";
import SliderContainer from "~/components/home/media_slider/SliderContainer";
import Story from "~/components/story/Story";
import StoryItem from "~/components/story/StoryItem";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
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
        {stories.map((story, i) =>
          i === currentSlide ? (
            <SliderContainer
              currentSlide={currentSlide}
              mediaList={stories}
              prevOnClick={() => slider.current?.slickGoTo(i - 1, true)}
              nextOnClick={() => slider.current?.slickGoTo(i + 1, true)}
              containerClassName={"story"}
            >
              <Story />
            </SliderContainer>
          ) : (
            <StoryItem
              key={i}
              onClick={() => slider.current?.slickGoTo(i, true)}
            />
          )
        )}
      </Slider>
    </div>
  );
};

export default Stories;
