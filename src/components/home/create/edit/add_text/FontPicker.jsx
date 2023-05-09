import polygonIcon from "~/assets/polygon1.svg";
import FontTable from "~/components/text_editor/FontTable";

const FontPicker = ({ font, setTextInputs, textInputs, currText }) => {
  const handleChangeFont = (value) => {
    let tempArray = [...textInputs];
    tempArray[currText].font = value;
    setTextInputs([...tempArray]);
  };
  return (
    <div className="picker-wrapper">
      <FontTable
        value={textInputs[currText].font}
        onChange={handleChangeFont}
      />
      <img src={polygonIcon} alt="Index" />
    </div>
  );
};

export default FontPicker;
