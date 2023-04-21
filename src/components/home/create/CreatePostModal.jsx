import { useState } from "react";
import Modal from "../../Modal";
import { createFeatures } from "../../../constants/createFeatures";

const CreatePostModal = ({ setMenuItemId, menuItemId }) => {
  const [currFeature, setCurrFeature] = useState("create");
  const [fileList, setFileList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const Feature = createFeatures.get(currFeature).component;

  const handleCancel = () => {
    setMenuItemId({
      current: menuItemId.previous,
      previous: "create",
    });
  };

  return (
    <Modal
      onCancel={handleCancel}
      open
      title={createFeatures.get(currFeature).title}
    >
      <Feature
        fileList={fileList}
        setFileList={setFileList}
        onCancel={handleCancel}
        setCurrFeature={setCurrFeature}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </Modal>
  );
};

export default CreatePostModal;
