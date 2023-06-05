import polygonIcon from "~/assets/polygon2.svg";
import SizeEditor from "~/components/text_editor/SizeEditor";

const SizePicker = ({ value, onChange, ref }) => {
  return (
    <div ref={ref} className="picker-wrapper">
      <img src={polygonIcon} alt="Index" />
      <div className="picker-container -top-[33px] -left-[124px] py-[15px] px-[20px]">
        <SizeEditor onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default SizePicker;
