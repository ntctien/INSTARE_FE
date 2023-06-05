const ColorPalette = ({ colors, value, onChange, className }) => {
  return (
    <div
      className={`bg-[#38444E] px-[10px] py-5 rounded-10 grid grid-cols-6 gap-[10px] ${className}`}
    >
      {colors.map((color, i) => (
        <div
          key={i}
          onClick={() => onChange(color)}
          style={{ background: color }}
          className={`w-[30px] aspect-square rounded-full cursor-pointer outline ${
            color === value
              ? "outline-2 outline-blue"
              : "outline-1 outline-grey-dark"
          } hover:outline-blue`}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
