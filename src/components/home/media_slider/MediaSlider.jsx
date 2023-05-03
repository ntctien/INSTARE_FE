import { useEffect, useRef } from "react";
import Slider from "react-slick";
import SliderContainer from "./SliderContainer";
import Video from "./Video";
import deleteIcon from "../../../assets/delete.svg";
import editIcon from "../../../assets/edit.svg";

const MediaSlider = ({
  mediaList,
  editMode,
  handleDelete,
  setCurrFeature,
  currentSlide,
  setCurrentSlide,
  dots
}) => {
  const slider = useRef(null);

  useEffect(() => {
    slider.current?.slickGoTo(currentSlide,true);
  }, [currentSlide]);

  const handleEdit = () => {
    setCurrFeature("edit");
  };

  return (
    <SliderContainer
      slider={slider}
      showPrev={currentSlide !== 0}
      showNext={currentSlide !== mediaList.length - 1}
      containerClassName="media-slider-container"
    >
      <Slider
        className="bg-[#D9D9D933] media-slider"
        dots={dots}
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
        <>
          <button
            onClick={() => handleDelete(currentSlide)}
            className="absolute top-[6.5px] right-[6.5px]"
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
          {mediaList[currentSlide].type !== "video" && (
            <button
              onClick={handleEdit}
              className="row gap-x-[6px] py-[6px] pl-[6.5px] pr-[11px] bg-white rounded-5 absolute right-[6px] bottom-[10px]"
            >
              <img src={editIcon} alt="Edit" />
              <p className="font-medium text-14">Edit</p>
            </button>
          )}
        </>
      )}
    </SliderContainer>
  );
};

export default MediaSlider;
