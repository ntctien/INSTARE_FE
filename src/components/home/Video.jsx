import { useRef, useEffect } from "react";

const Video = ({ src, play }) => {
  const vidRef = useRef(null);
  useEffect(() => {
    if (play) {
      vidRef.current?.play();
      const active = vidRef.current?.closest(".slick-active");
      if (!active) {
        vidRef.current?.pause();
      }
    } else {
      vidRef.current?.pause();
    }
  }, [play]);
  return (
    <video controls ref={vidRef} className="object-contain">
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
