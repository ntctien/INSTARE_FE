import Mpegts from "mpegts.js";
import React, { useEffect } from "react";

const Stream = ({ play = true }) => {
  useEffect(() => {
    var flvPlayer = Mpegts.createPlayer({
      type: "flv",
      url: 'http://localhost:8080/live/livestream/camtien.flv',
      isLive: true,
      enableStashBuffer: false,
    });

    flvPlayer.attachMediaElement(document.getElementById('video_player'));
    flvPlayer.load();
    flvPlayer.play();
  }, []);

  return (
    <video
      id="video_player"
      width="100%"
      autoPlay
      controls
      src="blob:http://localhost:8080/live/livestream/camtien.flv"
    ></video>
  );
};

export default Stream;
