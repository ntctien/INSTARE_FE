import { useState, useRef } from "react";
import Slider from "react-slick";
import nextIcon from "../../assets/arrow-next.svg";
import prevIcon from "../../assets/arrow-back.svg";
import tempImg1 from "../../assets/temp1.jpg";

const mediaList = [tempImg1, tempImg1, tempImg1, tempImg1];

const MediaSlider = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="relative">
      <Slider
        className="bg-[#D9D9D933] w-[800px] h-[600px] media-slider"
        dots
        arrows={false}
        ref={slider}
        beforeChange={(current,next)=>setCurrentSlide(next)}
      >
        {mediaList.map((item, i) => (
          <div key={i} className="media-container">
            <img src={item} alt="Post content" />
          </div>
        ))}
      </Slider>
      {currentSlide !== 0 && (
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="arrow-btn arrow-prev"
        >
          <img src={prevIcon} alt="Prev" />
        </button>
      )}
      {currentSlide !== mediaList.length - 1 && (
        <button
          onClick={() => slider?.current?.slickNext()}
          className="arrow-btn arrow-next"
        >
          <img src={nextIcon} alt="Next" />
        </button>
      )}
    </div>
  );
};

export default MediaSlider;
