import polygonIcon from "~/assets/polygon2.svg";
import SizeEditor from "~/components/text_editor/SizeEditor";

const SizePicker = ({ size, setTextInputs, textInputs, currText }) => {
  const handleOnChange = (e) => {
    const temp = [...textInputs];
    temp[currText].size = e.target.value;
    setTextInputs([...temp]);
  };
  return (
    <div className="picker-wrapper">
      <img src={polygonIcon} alt="Index" />
      <div className="picker-container -top-[33px] -left-[124px] py-[15px] px-[20px]">
        <SizeEditor handleOnChange={handleOnChange} size={size} />
      </div>
    </div>
  );
};

export default SizePicker;
