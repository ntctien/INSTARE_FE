import React, { useState } from "react";
import { message } from "antd";
import report from "~/api/services/report/report";
import { useSelector } from "react-redux";
import ReasonModal from "./ReasonModal";

const ReportModal = ({ userId, postId, onCancel, ...props }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReport = async () => {
    setLoading(true);
    await report(currentUser.token, { userId, postId, reason });
    setLoading(false);
    message.success("You have reported this post!");
    onCancel();
  };

  return (
    <ReasonModal
      title={"You want to report this post/account?"}
      loading={loading}
      onReasonChange={(value) => setReason(value)}
      onConfirm={handleReport}
      onCancel={onCancel}
      {...props}
    />
  );
};

export default ReportModal;
