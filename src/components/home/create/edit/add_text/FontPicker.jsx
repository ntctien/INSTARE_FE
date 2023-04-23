import polygonIcon from "~/assets/polygon1.svg";

const fonts = [
  "Ubuntu",
  "Lato",
  "Inter",
  "Lexend",
  "Montserrat",
  "Montagu Slab",
];

const FontPicker = () => {
  return (
    <div className="absolute -top-10 left-5 ">
      <div className="relative">
        <div className="bg-grey rounded-5 w-[250px] h-[270px] absolute -top-[253px] -left-[52px] flex flex-col px-[5px]">
          <table className="h-full">
            {fonts.map((font, i) => (
              <tr style={{fontFamily:font}} className="hover:bg-[#0000000D] cursor-pointer">
                <td className="text-[30px] p-0 pl-[15px]">Aa</td>
                <td className="text-[20px] p-0">{font}</td>
              </tr>
            ))}
          </table>
        </div>
        <img src={polygonIcon} alt="Index" />
      </div>
    </div>
  );
};

export default FontPicker;
