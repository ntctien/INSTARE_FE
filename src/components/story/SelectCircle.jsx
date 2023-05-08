const SelectCircle = ({ background, selected }) => {
  return (
    <div
      style={{ background: background }}
      className={`w-[30px] aspect-square rounded-full ${
        selected && "outline outline-2 outline-blue"
      }`}
    />
  );
};

export default SelectCircle;
