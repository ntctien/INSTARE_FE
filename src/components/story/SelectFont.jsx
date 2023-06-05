import React from "react";
import Select from "~/components/story/Select";
import FontTable from "~/components/text_editor/FontTable";

const SelectFont = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      valueStyle={{
        fontFamily: value,
        width: 140,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
      prefix={
        <p style={{ fontFamily: value }} className="text-center w-[30px]">
          Aa
        </p>
      }
      dropDownBox={
        <FontTable
          onChange={onChange}
          value={value}
          background={"#38444E"}
          position={"top-0 -right-2 translate-x-full"}
        />
      }
    />
  );
};

export default SelectFont;
