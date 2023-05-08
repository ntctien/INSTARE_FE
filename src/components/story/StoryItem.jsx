import { useNavigate } from "react-router-dom";
import { createIcon } from "~/assets/story_icons";

const StoryItem = ({
  onClick,
  className,
  textColor,
  borderWidth,
  read,
  self,
  containStories,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center mt-[2px] cursor-pointer ${className}`}
    >
      <div
        style={{
          width: 100 + (borderWidth ?? 3) * 2 + "px",
          background:
            containStories === false
              ? "transparent"
              : read
              ? "#D9D9D9"
              : "linear-gradient(130.24deg, #96CAF7 13.1%, #BFB2F3 85.6%)",
        }}
        className="center aspect-square rounded-full"
      >
        <div className="relative">
          <div
            style={{
              borderWidth: borderWidth ?? 3,
              borderColor: containStories === false ? "#D9D9D9" : "#FFFFFF",
            }}
            className={`w-[100px] h-[100px] bg-grey rounded-full`}
          ></div>
          {self && (
            <button
              onClick={() => navigate("/stories/create")}
              className="absolute right-0 -bottom-2 hover:brightness-105"
            >
              <img src={createIcon} alt="Create story" />
            </button>
          )}
        </div>
      </div>
      <p
        style={{ color: textColor }}
        className="text-[16px] leading-[20px] mt-[8px]"
      >
        {self ? "Your story" : "username"}
      </p>
    </div>
  );
};

export default StoryItem;
