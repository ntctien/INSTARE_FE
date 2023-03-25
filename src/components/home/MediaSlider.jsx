import { useState, useRef } from "react";
import Slider from "react-slick";
import SliderContainer from "./SliderContainer";
import deleteIcon from "../../assets/delete.svg";
import Video from "./Video";

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
        {mediaList.map(
          (item, i) =>
            (item.type === "image" || item.type === "video") && (
              <div key={i} className="media-container">
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt="Post content"
                    className="object-contain"
                  />
                ) : (
                  <Video src={item.url} play={i === currentSlide} />
                )}
              </div>
            )
        )}
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
