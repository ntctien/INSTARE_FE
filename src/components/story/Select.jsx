import { useState } from "react";
import selectIcon from "~/assets/select-icon.svg";
import useClickOutside from "~/hooks/useClickOutside";

const Select = ({ value, valueStyle, prefix, dropDownBox }) => {
  const [open, setOpen] = useState(false);
  const { clickOutsideRef } = useClickOutside(() => setOpen(false));

  return (
    <div
      ref={clickOutsideRef}
      onClick={() => setOpen((prev) => !prev)}
      className="row gap-x-[17px] pl-[25px] relative"
    >
      {prefix}
      <p style={valueStyle} className="flex-1">{value}</p>
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
