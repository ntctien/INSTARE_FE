import Modal from "./Modal";

const CreatePostModal = ({ open, onCancel }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title="Create new post"
    >
      <div className="px-[20px] py-[14px]"></div>
    </Modal>
  );
};

export default CreatePostModal;
