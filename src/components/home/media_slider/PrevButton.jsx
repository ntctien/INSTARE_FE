import prevIcon from "~/assets/arrow-back.svg";

const PrevButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={`arrow-btn arrow-prev ${className}`}>
      <img src={prevIcon} alt="Prev" />
    </button>
  );
};

export default PrevButton;
