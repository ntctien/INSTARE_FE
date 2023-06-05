import polygonIcon from "~/assets/polygon1.svg";
import FontTable from "~/components/text_editor/FontTable";

const FontPicker = ({ value, onChange, ref }) => {
  return (
    <div ref={ref} className="picker-wrapper">
      <FontTable value={value} onChange={onChange} />
      <img src={polygonIcon} alt="Index" />
    </div>
  );
};

export default FontPicker;
