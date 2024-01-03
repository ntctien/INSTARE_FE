import React, { useEffect, useState } from "react";
import Mpegts from "mpegts.js";

const PreviewLiveStream = ({ streamUrl }) => {
  const [startedStream, setStartedStream] = useState(false);

  useEffect(() => {
    if (!streamUrl) return;

    const fetchStream = async () => {
      try {
        const response = await fetch(streamUrl);

        if (response.ok) {
          setStartedStream(true);
          return;
        } else {
          setTimeout(async () => {
            await fetchStream();
          }, 5000); 
        }
      } catch {}
    };

    fetchStream();
  }, [streamUrl]);

  useEffect(() => {
    if (!startedStream) return;

    const flvPlayer = Mpegts.createPlayer({
      type: "flv",
      url: streamUrl,
      isLive: true,
      enableStashBuffer: false,
    });

    flvPlayer.attachMediaElement(document.getElementById("video_player"));
    flvPlayer.load();
    flvPlayer.play();
  }, [startedStream, streamUrl]);

  return (
    <div className="bg-story rounded-10 px-5 py-4">
      <h2>Preview</h2>
      <video
        id="video_player"
        autoPlay
        muted="muted"
        controls={false}
        src={startedStream && `blob:${streamUrl}`}
        className="aspect-video w-[50%] rounded-10 mx-auto mt-2"
      ></video>
    </div>
  );
};

export default PreviewLiveStream;
