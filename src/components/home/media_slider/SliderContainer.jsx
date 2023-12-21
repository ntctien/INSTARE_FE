import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const SliderContainer = ({
  children,
  slider,
  containerClassName,
  prevOnClick,
  nextOnClick,
  showPrev,
  showNext,
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {children}
      {showPrev && (
        <PrevButton
          onClick={(e) => {
            e.stopPropagation();
            prevOnClick != null ? prevOnClick() : slider?.current?.slickPrev();
          }}
        />
      )}
      {showNext && (
        <NextButton
          onClick={(e) => {
            e.stopPropagation();
            nextOnClick != null ? nextOnClick() : slider?.current?.slickNext();
          }}
        />
      )}
    </div>
  );
};

export default SliderContainer;
