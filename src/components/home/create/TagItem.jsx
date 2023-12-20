import React from "react";
import CloseButton from "~/components/buttons/CloseButton";

const TagItem = ({ username, onDelete }) => {
  return (
    <div className="h-[30px] bg-pastel-purple rounded-5 pl-[10px] pr-[5px] py-[5px] row gap-x-2 hover:brightness-110 cursor-pointer">
      <p className="font-semibold text-16">{username}</p>
      <CloseButton width={15} onClick={() => onDelete(username)} />
    </div>
  );
};

export default TagItem;
