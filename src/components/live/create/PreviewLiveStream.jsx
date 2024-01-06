import StreamVideo from "../StreamVideo";
import WebcamPreview from "./WebcamPreview";

const PreviewLiveStream = ({ streamUrl, pushUrl, videoSource }) => {
  return (
    <div className="bg-story rounded-10 px-5 py-4">
      <h2>Preview</h2>
      {videoSource === "obs" ? (
        <StreamVideo
          streamUrl={streamUrl}
          className="aspect-video w-[50%] rounded-10 mx-auto mt-2"
        />
      ) : (
        <WebcamPreview pushUrl={pushUrl} videoSource={videoSource} />
      )}
    </div>
  );
};

export default PreviewLiveStream;
