import { endLiveIcon } from "~/assets/live_icons";

const EndLiveButton = ({ ...rest }) => {
  return (
    <button
      className="absolute top-[18px] right-[18px] row gap-x-[6px] px-2 py-3 bg-story border-1 border-white rounded-10 hover:brightness-125"
      {...rest}
    >
      <img src={endLiveIcon} alt="End live" />
      <p className="font-medium text-white text-20">End live</p>
    </button>
  );
};

export default EndLiveButton;
