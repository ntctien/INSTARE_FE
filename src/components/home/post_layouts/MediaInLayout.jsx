import { PlayCircleFilled } from "@ant-design/icons";
import Video from "../media_slider/Video";

const MediaInLayout = ({ media, containMoreMedia, imageClassName }) => {
  return media.type === "image" ? (
    <img
      src={media.url}
      alt="Post media"
      className={`${
        imageClassName || ""
      } w-full h-full object-cover object-center ${
        containMoreMedia && "brightness-50"
      }`}
    />
  ) : (
    <div className="w-full h-full relative">
      <Video
        src={media.url}
        play={false}
        controls={false}
        className={`w-full h-full object-cover object-center ${
          containMoreMedia && "brightness-50"
        }`}
      />
      {!containMoreMedia && (
        <PlayCircleFilled className="text-white text-20 absolute-center" />
      )}
    </div>
  );
};

export default MediaInLayout;
