import nextIcon from "~/assets/arrow-next.svg";

const NextButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={`arrow-btn arrow-next ${className}`}>
      <img src={nextIcon} alt="Next" />
    </button>
  );
};

export default NextButton;
