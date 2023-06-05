import { useContext, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import CropBar from "~/components/profile/CropBar";
import { StoryContext } from "~/contexts/StoryContext";

const Crop = ({ updateMenuBar }) => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);
  const { story } = useContext(StoryContext);
  const [zoom, setZoom] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [clientSize, setClientSize] = useState();
  const [naturalSize, setNaturalSize] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    updateMenuBar(mediaRef, imageRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const media = mediaRef.current;
    if (media) {
      setClientSize({ width: media.clientWidth, height: media.clientHeight });
    }
  }, [mediaRef]);

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      setNaturalSize({
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    }
  }, [imageRef]);

  useEffect(() => {
    if (clientSize && naturalSize) {
      if (naturalSize.width < naturalSize.height) {
        const baseValue = {
          width: (clientSize.height * naturalSize.width) / naturalSize.height,
          height: clientSize.height,
        };
        setBaseSize(baseValue);
        setSize(baseValue);
      }
    }
  }, [clientSize, naturalSize]);

  useEffect(() => {
    setPosition({
      x: (mediaRef.current.offsetWidth - imageRef.current.offsetWidth) / 2,
      y: (mediaRef.current.offsetHeight - imageRef.current.offsetHeight) / 2,
    });
  }, [size]);

  useEffect(() => {
    setSize({
      width: (baseSize.width * (zoom + 100)) / 100,
      height: (baseSize.height * (zoom + 100)) / 100,
    });
  }, [zoom, baseSize]);

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-10 overflow-hidden">
        <div
          ref={mediaRef}
          className="relative overflow-clip h-[70vh] aspect-story bg-black"
        >
          <Rnd
            size={size}
            position={position}
            onDragStop={(e, d) => {
              setPosition({ x: d.x, y: d.y });
            }}
            enableResizing={false}
          >
            <img ref={imageRef} src={story} alt="Edit" draggable={false} />
          </Rnd>
        </div>
      </div>
      <div className="w-[45vw] mt-2">
        <CropBar zoom={zoom} setZoom={setZoom} min={-50} max={50} />
      </div>
    </div>
  );
};

export default Crop;
