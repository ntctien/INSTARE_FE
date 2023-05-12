import CloseModalContainer from "./CloseModalContainer";
import Modal from "./Modal";

const CloseModal = ({ children, open, onCancel, title }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={title}>
      <CloseModalContainer onCancel={onCancel}>
        {children}
      </CloseModalContainer>
    </Modal>
  );
};

export default CloseModal;
