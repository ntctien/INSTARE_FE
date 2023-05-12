import BackModalContainer from "./BackModalContainer";
import Modal from "./Modal";

const BackModal = ({ children, open, onCancel, title, onBack, onDone }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={title}>
      <BackModalContainer onBack={onBack} onDone={onDone}>
        {children}
      </BackModalContainer>
    </Modal>
  );
};

export default BackModal;
