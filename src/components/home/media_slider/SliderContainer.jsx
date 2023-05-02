import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const SliderContainer = ({
  children,
  slider,
  currentSlide,
  mediaList,
  containerClassName,
  prevOnClick,
  nextOnClick,
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {children}
      {currentSlide !== 0 && (
        <PrevButton
          onClick={() =>
            prevOnClick != null ? prevOnClick() : slider?.current?.slickPrev()
          }
        />
      )}
      {currentSlide !== mediaList.length - 1 && (
        <NextButton
          onClick={() =>
            nextOnClick != null ? nextOnClick() : slider?.current?.slickNext()
          }
        />
      )}
    </div>
  );
};

export default SliderContainer;
