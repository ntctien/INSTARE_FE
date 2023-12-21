import { Tooltip } from "antd";
import { useState } from "react";
import reactions from "~/constants/reactions";

const ReactionBar = ({ children, onReact }) => {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      color="#FFFFFF"
      arrow={false}
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
