import polygonIcon from "~/assets/polygon1.svg";

const fonts = [
  "Ubuntu",
  "Lato",
  "Inter",
  "Lexend",
  "Montserrat",
  "Montagu Slab",
];

const FontPicker = ({ handleChangeFont }) => {
  return (
    <div className="picker-wrapper">
      <div className="bg-grey rounded-5 w-[250px] h-[270px] absolute -top-[253px] -left-[52px] flex flex-col px-[5px]">
        <table className="h-full">
          <tbody>
            {fonts.map((font, i) => (
              <tr
                key={i}
                style={{ fontFamily: font }}
                onClick={handleChangeFont}
                className="hover:bg-[#6350500d] cursor-pointer"
              >
                <td className="text-[30px] p-0 pl-[15px]">Aa</td>
                <td className="text-[20px] p-0">{font}</td>
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
