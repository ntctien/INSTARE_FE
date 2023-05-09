import fonts from "~/constants/fonts";

const FontTable = ({ onChange, value, background, position }) => {
  return (
    <div
      style={{ background: background || "#D9D9D9" }}
      className={`rounded-5 w-[250px] h-[270px] absolute ${
        position || "-top-[253px] -left-[52px]"
      } flex flex-col px-[5px]`}
    >
      <table className="h-full">
        <tbody>
          {fonts.map((item, i) => (
            <tr
              key={i}
              style={{ fontFamily: item }}
              onClick={() => onChange(item)}
              className={`hover:bg-[#6350500d] cursor-pointer ${
                value === item && "bg-[#0000000D]"
              }`}
            >
              <td className="text-[30px] p-0 pl-[15px]">Aa</td>
              <td className="text-[20px] p-0">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FontTable;
