import { Row, Tooltip } from "antd";
import { layoutIcon, emotionIcon, tagIcon } from "~/assets/post_icons";

const CreatePostAction = ({ setCurrFeature }) => {
  const actions = [
    {
      key: "layout",
      name: "Layout",
      icon: layoutIcon,
    },
    {
      key: "emotion",
      name: "Emotion",
      icon: emotionIcon,
      onClick: () => setCurrFeature("emotion"),
    },
    {
      key: "tag",
      name: "Tag",
      icon: tagIcon,
      onClick: () => setCurrFeature("tag"),
    },
  ];

  return (
    <Row className="gap-x-2">
      {actions.map((action) => (
        <Tooltip title={action.name} arrow={false}>
          <button
            key={action.key}
            className="hover:brightness-110"
            onClick={action.onClick}
          >
            <img src={action.icon} alt={action.key} />
          </button>
        </Tooltip>
      ))}
    </Row>
  );
};

export default CreatePostAction;
