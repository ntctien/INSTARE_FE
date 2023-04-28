import CloseButton from "../CloseButton";
import Modal from "./Modal";

const CloseModal = ({ children, open, onCancel, title }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={title}>
      {children}
      {/* Close button */}
      <CloseButton
        onClick={onCancel}
        className="absolute top-[11.5px] right-[13.5px]"
      />
    </Modal>
  );
};

export default CloseModal;
