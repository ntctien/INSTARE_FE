import { useEffect, useRef } from "react";

const useEditPhoto = () => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const media = mediaRef.current;
    if (
      image &&
      media &&
      (image.naturalWidth <= image.naturalHeight ||
        media.clientHeight > (window.innerHeight * 58) / 100)
    ) {
      media.style.height = "100%";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageRef.current, mediaRef.current]);

  return { imageRef, mediaRef };
};

export default useEditPhoto;
