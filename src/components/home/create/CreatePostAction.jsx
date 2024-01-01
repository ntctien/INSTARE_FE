import { Row, Tooltip } from "antd";
import {
  layout0Icon,
  layout1Icon,
  layout2Icon,
  layout3Icon,
  layout4Icon,
  emotionIcon,
  tagIcon,
} from "~/assets/post_icons";

const CreatePostAction = ({
  fileList,
  layout,
  setCurrFeature,
  onChangeLayout,
}) => {
  const getLayoutIcon = () => {
    switch (layout) {
      case 1:
        return layout0Icon;
      case 2:
        return layout1Icon;
      case 3:
        return layout2Icon;
      case 4:
        return layout3Icon;
      case 5:
        return layout4Icon;
      default:
        return layout0Icon;
    }
  };
  const actions = [
    ...(fileList.length >= 4
      ? [
          {
            key: "layout",
            name: "Layout",
            icon: getLayoutIcon(),
            onClick: onChangeLayout,
          },
        ]
      : []),
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
