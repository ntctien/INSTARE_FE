import { useEffect, useRef } from "react";

const useEditStory = (updateMenuBar) => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    updateMenuBar(mediaRef, imageRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { mediaRef, imageRef };
};

export default useEditStory;
