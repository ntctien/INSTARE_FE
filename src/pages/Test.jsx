import domtoimage from "dom-to-image";
import { useRef } from "react";
import tempImage from "~/assets/temp1.jpg";

const Test = () => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);

  const handleDone = () => {
    const image = imageRef.current;
    const scale = image.naturalWidth / image.clientWidth;
    domtoimage
      .toJpeg(image, {
        width: image.naturalHeight,
        height: image.naturalWidth,
        style: {
          transform: `rotate(90deg) scale(${scale})`,
          transformOrigin: "top left",
          translate: `600px -${(600-338)/2}px`
        }
    })
      .then((url) => {
        console.log(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-screen h-screen center">
      <div ref={mediaRef} onClick={handleDone} className="bg-red-400 h-[50vh]">
        <img
          ref={imageRef}
          src={tempImage} 
          alt="temp"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Test;
