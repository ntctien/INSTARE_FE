import { useState, useRef } from "react";
import Slider from "react-slick";
import SliderContainer from "./SliderContainer";
import deleteIcon from "../../assets/delete.svg";

const MediaSlider = ({ mediaList, editMode, handleDelete }) => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <SliderContainer
      slider={slider}
      currentSlide={currentSlide}
      mediaList={mediaList}
      containerClassName="media-slider-container"
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
            <img src={item} alt="Post content" className="object-contain" />
          </div>
        ))}
      </Slider>
      {editMode && (
        <button
          onClick={() => handleDelete(currentSlide)}
          className="absolute top-[6.5px] right-[6.5px]"
        >
          <img src={deleteIcon} alt="Delete" />
        </button>
      )}
    </SliderContainer>
  );
};

export default MediaSlider;
