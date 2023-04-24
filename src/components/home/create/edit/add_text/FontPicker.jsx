import polygonIcon from "~/assets/polygon1.svg";

const fonts = [
  "Ubuntu",
  "Lato",
  "Inter",
  "Lexend",
  "Montserrat",
  "Montagu Slab",
];

const FontPicker = ({ font, setTextInputs, textInputs, currText }) => {
  const handleChangeFont = (value) => {
    let tempArray = [...textInputs];
    tempArray[currText].font = value;
    setTextInputs([...tempArray]);
  };
  return (
    <div className="picker-wrapper">
      <div className="bg-grey rounded-5 absolute w-[250px] h-[270px] -top-[253px] -left-[52px] flex flex-col px-[5px]">
        <table className="h-full">
          <tbody>
            {fonts.map((item, i) => (
              <tr
                key={i}
                style={{ fontFamily: item }}
                onClick={()=>handleChangeFont(item)}
                className={`hover:bg-[#6350500d] cursor-pointer ${textInputs[currText].font===item && 'bg-[#0000000D]'}`}
              >
                <td className="text-[30px] p-0 pl-[15px]">Aa</td>
                <td className="text-[20px] p-0">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <img src={polygonIcon} alt="Index" />
    </div>
  );
};

export default FontPicker;
