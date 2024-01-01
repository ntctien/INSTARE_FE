import { useState } from "react";
import Modal from "../../modal/Modal";
import { createFeatures } from "../../../constants/createFeatures";

const CreatePostModal = ({ setMenuItemId, menuItemId }) => {
  const [currFeature, setCurrFeature] = useState("create");
  const [fileList, setFileList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emotion, setEmotion] = useState();

  const Feature = createFeatures.get(currFeature).component;

  const handleCancel = () => {
    setMenuItemId({
      current: menuItemId.previous,
      previous: "create",
    });
  };

  return (
    <Modal
      open
      title={createFeatures.get(currFeature).title}
      closeOnClickOut={false}
      onCancel={handleCancel}
    >
      <Feature
        fileList={fileList}
        setFileList={setFileList}
        onCancel={handleCancel}
        setCurrFeature={setCurrFeature}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        emotion={emotion}
        setEmotion={setEmotion}
      />
    </Modal>
  );
};

export default CreatePostModal;
