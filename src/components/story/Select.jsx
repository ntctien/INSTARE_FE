import { useState } from "react";
import selectIcon from "~/assets/select-icon.svg";
import useClickOutside from "~/hooks/useClickOutside";

const Select = ({ value, valueClassName, prefix, dropDownBox }) => {
  const [open, setOpen] = useState(false);
  const { ref } = useClickOutside(() => setOpen(false));

  return (
    <div
      ref={ref}
      onClick={() => setOpen((prev) => !prev)}
      className="row gap-x-[17px] pl-[25px] relative"
    >
      {prefix}
      <p className={`flex-1 ${valueClassName}`}>{value}</p>
      <button>
        <img src={selectIcon} alt="Select" />
      </button>
      {open && (
        <div className="absolute top-0 -right-2 translate-x-full">
          {dropDownBox}
        </div>
      )}
    </div>
  );
};

export default Select;
