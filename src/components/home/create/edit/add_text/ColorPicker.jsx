import textColors from "~/constants/textColors";
import polygonIcon from "~/assets/polygon2.svg";

const ColorPicker = ({ color, setTextInputs, textInputs, currText }) => {
  const handlePickColor = (value) => {
    const temp = [...textInputs];
    temp[currText].color = value;
    console.log([...temp]);
    setTextInputs([...temp]);
  };
  return (
    <div className="picker-wrapper">
      <img src={polygonIcon} alt="Index" />
      <div className="picker-container -top-[135px] -right-[33px] w-[250px] p-[10px]">
        <h4 className="font-ubuntu text-[14px]">Choose text color</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, minmax(0, 30px))",
          }}
          className="place-content-between mt-[6px] gap-y-[10px]"
        >
          {textColors.map((item, i) => (
            <button
              key={i}
              onClick={() => handlePickColor(item)}
              style={{ background: item }}
              className={`w-[30px] aspect-square rounded-full ${
                textInputs[currText].color === item &&
                "outline outline-[2px] outline-blue"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
