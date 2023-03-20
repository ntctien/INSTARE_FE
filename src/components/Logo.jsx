const Logo = ({ textColor, custom }) => {
  return (
    <div className={`flex gap-x-[17px] items-end ${custom}`}>
      <div className="w-[50px] h-[50px] bg-[#D9D9D9]"></div>
      <h2
        className="font-ubuntu font-medium text-32 leading-[37px] tracking-widest"
        style={{ color: textColor }}
      >
        InStare
      </h2>
    </div>
  );
};

export default Logo;
