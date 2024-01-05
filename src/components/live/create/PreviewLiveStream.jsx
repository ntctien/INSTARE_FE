import StreamVideo from "../StreamVideo";

const PreviewLiveStream = ({ streamUrl }) => {
  return (
    <div className="bg-story rounded-10 px-5 py-4">
      <h2>Preview</h2>
      <StreamVideo
        streamUrl={streamUrl}
        className="aspect-video w-[50%] rounded-10 mx-auto mt-2"
      />
    </div>
  );
};

export default PreviewLiveStream;
