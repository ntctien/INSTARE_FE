import { useRef } from "react";
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
  dots,
  loading,
}) => {
  const slider = useRef(null);

  const handleEdit = () => {
    setCurrFeature("edit");
  };

  const onDelete = () => {
    if (currentSlide !== 0) {
      slider.current?.slickGoTo(currentSlide - 1, true);
      setCurrentSlide(currentSlide - 1);
    }
    handleDelete(currentSlide);
  };

  return (
    <SliderContainer
      slider={slider}
      showPrev={currentSlide !== 0}
      showNext={currentSlide !== mediaList?.length - 1}
      containerClassName="media-slider-container"
    >
      <Slider
        className={`bg-[#D9D9D933] media-slider ${
          loading && "loading-animation"
        }`}
        dots={dots}
        arrows={false}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {!loading ? (
          mediaList?.map(
            (item, i) =>
              item.type != null &&
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
          )
        ) : (
          <div className="h-[500px]" />
        )}
      </Slider>
      {editMode && (
        <>
          <button
            onClick={onDelete}
            className="absolute top-[6.5px] right-[6.5px] hover:brightness-125"
          >
            <img src={deleteIcon} alt="Delete" />
          </button>
          {mediaList[currentSlide].type != null &&
            mediaList[currentSlide].type !== "video" && (
              <button
                onClick={handleEdit}
                className="row gap-x-[6px] py-[6px] pl-[6.5px] pr-[11px] bg-white rounded-5 absolute right-[6px] bottom-[10px] hover:brightness-95"
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
