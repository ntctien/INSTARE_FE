import Modal from "../../Modal";
import CreateNewPost from "./CreateNewPost";

const CreatePostModal = ({ open, onCancel }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={"Create new post"}>
      <CreateNewPost />
    </Modal>
  );
};

export default CreatePostModal;
