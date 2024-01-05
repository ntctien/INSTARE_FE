import React, { useEffect, useState } from "react";
import Mpegts from "mpegts.js";

const StreamVideo = ({ streamUrl, className }) => {
  const [streamable, setStreamable] = useState(false);

  useEffect(() => {
    if (!streamUrl) return;

    const fetchStream = async () => {
      try {
        const response = await fetch(streamUrl);

        if (response.ok) {
          setStreamable(true);
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
    if (!streamable) return;

    const flvPlayer = Mpegts.createPlayer({
      type: "flv",
      url: streamUrl,
      isLive: true,
      enableStashBuffer: false,
    });

    flvPlayer.attachMediaElement(document.getElementById("video_player"));
    flvPlayer.load();
    flvPlayer.play();
  }, [streamable, streamUrl]);

  return (
    <video
      id="video_player"
      autoPlay
      muted="muted"
      controls={false}
      src={streamable ? `blob:${streamUrl}` : undefined}
      className={className}
    ></video>
  );
};

export default StreamVideo;
