import { Row } from "antd";
import { webcamIcon, obsIcon } from "~/assets/video_sources_icons";
import VideoSourceItem from "./VideoSourceItem";

const videoSources = [
  {
    key: "webcam",
    name: "Webcam",
    icon: webcamIcon,
  },
  {
    key: "obs",
    name: "OBS",
    icon: obsIcon,
  },
];

const VideoSourceSelect = ({ value, onChange }) => {
  return (
    <div className="bg-story px-5 pt-[14px] pb-5">
      <h2>Choose video source</h2>
      <Row justify={"space-between"} className="mt-[18px] gap-x-[3%]">
        {videoSources.map((source) => (
          <VideoSourceItem
            key={source.key}
            selected={value === source.key}
            onClick={() => onChange(source.key)}
            {...source}
          />
        ))}
      </Row>
    </div>
  );
};

export default VideoSourceSelect;
