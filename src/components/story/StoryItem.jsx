import { useNavigate } from "react-router-dom";
import { createIcon } from "~/assets/story_icons";
import Avatar from "../home/Avatar";

const StoryItem = ({
  onClick,
  className,
  textColor,
  borderWidth,
  read,
  self,
  containStories,
  story,
  loading,
  isLive,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center mt-[2px] relative ${
        self && !containStories ? "cursor-default" : "cursor-pointer"
      } ${className}`}
    >
      <div
        style={{
          width: 100 + (borderWidth ?? 3) * 2 + "px",
          background: isLive
            ? "#F24E1E"
            : containStories === false
            ? "transparent"
            : read
            ? "#D9D9D9"
            : "linear-gradient(130.24deg, #96CAF7 13.1%, #BFB2F3 85.6%)",
        }}
        className="center aspect-square rounded-full"
      >
        <div className="relative">
          <Avatar
            width={"100px"}
            custom={`${borderWidth ?? "border-3"} ${
              containStories === false ? "border-grey" : "border-white"
            }`}
            ava={story?.ava}
            loading={loading}
          />
          {self && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/stories/create");
              }}
              className="absolute right-0 -bottom-2 hover:brightness-105"
            >
              <img src={createIcon} alt="Create story" />
            </button>
          )}
        </div>
      </div>
      <p
        style={{ color: textColor }}
        className={"text-[16px] leading-[20px] mt-[8px]"}
      >
        {self ? "Your story" : story?.username}
      </p>
      {/* Live */}
      {isLive && <div className="live-tag absolute -top-[3px]">LIVE</div>}
    </div>
  );
};

export default StoryItem;
