import { useState } from "react";
import CreatePostModal from "./CreatePostModal";
import { FeatureProvider } from "../../../contexts/FeatureContext";

const CreateContainer = ({ menuItemId, setMenuItemId }) => {
  const [currModal, setCurrModal] = useState("create");

  return (
    <FeatureProvider>
      <CreatePostModal
        open={currModal === "create"}
        onCancel={() =>
          setMenuItemId({ current: menuItemId.previous, previous: "create" })
        }
      />
    </FeatureProvider>
  );
};

export default CreateContainer;
