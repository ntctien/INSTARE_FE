import CloseModalContainer from "./CloseModalContainer";
import Modal from "./Modal";

const CloseModal = ({ children, open, onCancel, title, hidden }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={title} hidden={hidden}>
      <CloseModalContainer onCancel={onCancel}>{children}</CloseModalContainer>
    </Modal>
  );
};

export default CloseModal;
