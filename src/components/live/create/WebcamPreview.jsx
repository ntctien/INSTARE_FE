import React, { useEffect, useRef, useState } from "react";
import SrsRtcPublishAsync from "~/utils/srsRTCPublisherAsync";

const WebcamPreview = ({ pushUrl, videoSource }) => {
  const videoRef = useRef();
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const startWebcamStream = async () => {
      if (!pushUrl || videoSource !== "webcam") {
        mediaStream?.getTracks().forEach((track) => track.stop());
        return;
      }
      try {
        const sdk = SrsRtcPublishAsync();
        await sdk.publish(pushUrl);
        setMediaStream(sdk.stream);
        videoRef.current.srcObject = sdk.stream;
      } catch (error) {
        console.error("Error pushing webcam stream to SRS:", error);
      }
    };

    startWebcamStream();
  }, [mediaStream, pushUrl, videoSource]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted="muted"
      controls={false}
      className="aspect-video w-[50%] rounded-10 mx-auto mt-2 -scale-x-100"
    ></video>
  );
};

export default WebcamPreview;
