import { Input, Modal, Row, Spin, message } from "antd";
import React, { useState } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import report from "~/api/services/report/report";
import { useSelector } from "react-redux";

const { TextArea } = Input;

const ReportModal = ({ userId, postId, onCancel, ...props }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReport = async () => {
    setLoading(true);
    await report(currentUser.token, { userId, postId, reason });
    setLoading(false);
    message.success('You have reported this post!');
    onCancel();
  };

  return (
    <Modal
      centered
      footer={null}
      closable={false}
      className="font-ubuntu"
      {...props}
    >
      <Spin spinning={loading}>
        <h2 className="text-center text-xl font-medium">
          You want to report this post/account?
        </h2>
        <div className="my-1">
          <label>Reason:</label>
          <TextArea
            onChange={(e) => setReason(e.target.value)}
            style={{
              height: 100,
              resize: "none",
              border: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <Row align={"center"} className="gap-x-4 mt-4">
          <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleReport}>Confirm</PrimaryButton>
        </Row>
      </Spin>
    </Modal>
  );
};

export default ReportModal;
