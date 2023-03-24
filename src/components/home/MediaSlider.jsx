import { useState, useRef } from "react";
import Slider from "react-slick";
import tempImg1 from "../../assets/temp1.jpg";
import SliderContainer from "./SliderContainer";

const mediaList = [tempImg1, tempImg1, tempImg1, tempImg1];

const MediaSlider = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SliderContainer
      slider={slider}
      currentSlide={currentSlide}
      mediaList={mediaList}
      containerClassName='media-slider-container'
    >
      <Slider
        className="bg-[#D9D9D933] aspect-[4/3] media-slider"
        dots
        arrows={false}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {mediaList.map((item, i) => (
          <div key={i} className="media-container">
            <img src={item} alt="Post content" className="object-contain"/>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default MediaSlider;
