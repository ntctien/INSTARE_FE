import { useContext } from "react";
import Modal from "../../Modal";
import { FeatureContext } from "../../../contexts/FeatureContext";
import features from "../../../constants/createFeatures";

const CreatePostModal = ({ open, onCancel }) => {
  const { currFeature } = useContext(FeatureContext);
  const Feature = features.get(currFeature).component;

  return (
    <Modal open={open} onCancel={onCancel} title={features.get(currFeature).title}>
      <Feature />
    </Modal>
  );
};

export default CreatePostModal;
