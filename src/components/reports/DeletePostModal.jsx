import React from "react";
import ReasonModal from "../modal/ReasonModal";

const DeletePostModal = ({ onReasonChange, onDeletePost, ...rest }) => {
  return (
    <ReasonModal
      title={"You want to delete this post?"}
      onConfirm={onDeletePost}
      onReasonChange={onReasonChange}
      {...rest}
    />
  );
};

export default DeletePostModal;
