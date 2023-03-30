import { useState } from "react";
import Modal from "../../Modal";
import features from "../../../constants/createFeatures";

const CreatePostModal = ({ open, onCancel }) => {
  const [currFeature, setCurrFeature] = useState("create");

  const Feature = features.get(currFeature).component;

  return (
    <Modal open={open} onCancel={onCancel} title={features.get(currFeature).title}>
      <Feature setCurrFeature={setCurrFeature}/>
    </Modal>
  );
};

export default CreatePostModal;
