import { Tooltip } from "antd";
import { useState } from "react";
import {
  loveIcon,
  likeIcon,
  laughIcon,
  sadIcon,
  angryIcon,
} from "~/assets/react_icons";

const reactions = [
  {
    value: "LOVE",
    name: "Love",
    icon: loveIcon,
  },
  {
    value: "LIKE",
    name: "Like",
    icon: likeIcon,
  },
  {
    value: "LAUGH",
    name: "Laugh",
    icon: laughIcon,
  },
  {
    value: "SAD",
    name: "Sad",
    icon: sadIcon,
  },
  {
    value: "ANGRY",
    name: "Angry",
    icon: angryIcon,
  },
];

const ReactionBar = ({ children, onReact }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Tooltip
      color="#FFFFFF"
      open={open}
      onOpenChange={setOpen}
      title={
        <div className="flex items-center gap-x-2">
          {reactions.map((react, i) => (
            <Tooltip title={react.name} arrow={false}>
              <button
                key={i}
                className="hover:-translate-y-1 hover:scale-125 duration-150"
                onClick={() => onReact(react.value)}
              >
                <img src={react.icon} alt={react.name} />
              </button>
            </Tooltip>
          ))}
        </div>
      }
    >
      {children}
    </Tooltip>
  );
};

export default ReactionBar;
