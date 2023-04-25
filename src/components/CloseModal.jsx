import Modal from "./Modal";
import closeIcon from "~/assets/close.svg";

const CloseModal = ({ children, open, onCancel, title }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={title}>
      {children}
      {/* Close button */}
      <button
        onClick={onCancel}
        className="absolute top-[11.5px] right-[13.5px]"
      >
        <img src={closeIcon} alt="Close" />
      </button>
    </Modal>
  );
};

export default CloseModal;
