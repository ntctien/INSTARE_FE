import nextIcon from "../../assets/arrow-next.svg";
import prevIcon from "../../assets/arrow-back.svg";

const SliderContainer = ({ children, slider, currentSlide, mediaList, containerClassName }) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {children}
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

export default SliderContainer;
