import { useContext, useState } from "react";
import Modal from "../../Modal";
import { FeatureContext } from "../../../contexts/FeatureContext";
import features from "../../../constants/createFeatures";

const CreatePostModal = ({ setMenuItemId, menuItemId }) => {
  const { currFeature } = useContext(FeatureContext);
  const [fileList, setFileList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const Feature = features.get(currFeature).component;

  const handleCancel = () => {
    setMenuItemId({
      current: menuItemId.previous,
      previous: "create",
    });
  };

  return (
    <Modal onCancel={handleCancel} open title={features.get(currFeature).title}>
      <Feature
        fileList={fileList}
        setFileList={setFileList}
        onCancel={handleCancel}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </Modal>
  );
};

export default CreatePostModal;
