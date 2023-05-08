import selectIcon from "~/assets/select-icon.svg";

const Select = ({ value, valueClassName, prefix }) => {
  return (
    <div className="row gap-x-[17px] pl-[25px] h-[50px]">
      {prefix}
      <p className={`flex-1 ${valueClassName}`}>{value}</p>
      <button>
        <img src={selectIcon} alt="Select" />
      </button>
    </div>
  );
};

export default Select;
