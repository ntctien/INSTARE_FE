import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const SliderContainer = ({
  children,
  slider,
  containerClassName,
  prevOnClick,
  nextOnClick,
  showPrev,
  showNext
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {children}
      {showPrev && (
        <PrevButton
          onClick={() =>
            prevOnClick != null ? prevOnClick() : slider?.current?.slickPrev()
          }
        />
      )}
      {showNext && (
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
