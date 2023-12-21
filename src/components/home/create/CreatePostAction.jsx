import { Row, Tooltip } from "antd";
import { layoutIcon, emotionIcon, tagIcon } from "~/assets/post_icons";
import TagUsersModal from "./TagUsersModal";
import { useState } from "react";

const actions = [
  {
    key: "layout",
    name: 'Layout',
    icon: layoutIcon,
  },
  {
    key: "emotion",
    name: 'Emotion',
    icon: emotionIcon,
  },
  {
    key: "tag",
    name: 'Tag',
    icon: tagIcon,
  },
];

const CreatePostAction = ({ tags, setTags }) => {
  const [modal, setModal] = useState();

  const handleCancelModal = () => {
    setModal(null);
  };

  return (
    <>
      <Row className="gap-x-2">
        {actions.map((action) => (
          <Tooltip title={action.name} arrow={false}>
            <button
              key={action.key}
              className="hover:brightness-110"
              onClick={() => setModal(action.key)}
            >
              <img src={action.icon} alt={action.key} />
            </button>
          </Tooltip>
        ))}
      </Row>
      <TagUsersModal
        open={modal === "tag"}
        tags={tags}
        setTags={setTags}
        onCancel={handleCancelModal}
      />
    </>
  );
};

export default CreatePostAction;
