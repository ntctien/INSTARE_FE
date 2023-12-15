import { Modal, Row, Spin, Input } from "antd";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import CloseButton from "../buttons/CloseButton";

const { TextArea } = Input;

const ReasonModal = ({
  title,
  loading = false,
  reason,
  readOnly,
  onReasonChange,
  onConfirm,
  onCancel,
  ...props
}) => {
  return (
    <Modal
      centered
      footer={null}
      closable={false}
      className="font-ubuntu"
      {...props}
    >
      <Spin spinning={loading}>
        <h2 className="text-center text-xl font-medium">{title}</h2>
        <div className="my-1">
          <label>Reason:</label>
          <TextArea
            value={reason}
            onChange={(e) => onReasonChange(e.target.value)}
            readOnly={readOnly}
            style={{
              height: 100,
              resize: "none",
              border: "1px solid rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        {!readOnly && (
          <Row align={"center"} className="gap-x-4 mt-4">
            <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
            <PrimaryButton onClick={onConfirm}>Confirm</PrimaryButton>
          </Row>
        )}
      </Spin>
      <CloseButton
        onClick={onCancel}
        className="absolute top-[11.5px] right-[13.5px]"
      />
    </Modal>
  );
};

export default ReasonModal;
