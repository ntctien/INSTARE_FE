import polygonIcon from "~/assets/polygon2.svg";

const colors = [
  "#FFFFFF",
  "#000000",
  "#777777",
  "#D9D9D9",
  "#F24E1E",
  "#3D93DE",
  "#F5E875",
  "#85EA89",
  "#BFB2F3",
  "#96CAF7",
  "#EDA9DE",
  "#FE8F50",
  "#6EEECF",
  "#3D32B6",
  "#283E69",
  "#8E4933",
  "#B73793",
  "#879532",
];

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
          {colors.map((item, i) => (
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
