import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import domtoimage from "dom-to-image";
import PhotoTransformationBar from "../home/create/edit/PhotoTransformationBar";
import BackModal from "../modal/BackModal";
import useEditPhoto from "~/hooks/useEditPhoto";
import tempImg from "~/assets/temp1.jpg";

const ChangePhotoModal = ({ open, onCancel }) => {
  const { imageRef, mediaRef } = useEditPhoto(60);
  const previewCanvasRef = useRef(null);
  const [zoom, setZoom] = useState(50);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clientSize, setClientSize] = useState();

  useEffect(() => {
    if (!clientSize) return;

    const mediaWidth = clientSize.width;
    const mediaHeight = clientSize.height;
    const boundaryValue = mediaWidth < mediaHeight ? mediaWidth : mediaHeight;
    const newSize = (zoom * boundaryValue) / 100;
    setSize({ width: newSize, height: newSize });
  }, [zoom, clientSize]);

  const handleIncreaseZoom = () => {
    if (zoom < 100) setZoom(zoom + 1);
  };

  const handleDecreaseZoom = () => {
    if (zoom > 1) setZoom(zoom - 1);
  };

  const canvasPreview = () => {
    const canvas = previewCanvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("No 2d context");
    }

    const scale = image.clientWidth / image.naturalWidth;

    canvas.width = size.width / scale;
    canvas.height = size.height / scale;
    context.drawImage(
      image,
      position.x / scale,
      position.y / scale,
      size.width / scale,
      size.height / scale,
      0,
      0,
      size.width / scale,
      size.height / scale
    );
  };

  const handleDone = () => {
    canvasPreview();
    const media = previewCanvasRef.current;
    if (!media) return;
    domtoimage
      .toPng(media)
      .then((url) => {
        console.log(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <BackModal
      open={open}
      onCancel={onCancel}
      title={"Change profile photo"}
      onDone={handleDone}
    >
      <div className="flex flex-col items-center px-[12px] pt-[12px] pb-[33px] w-[550px]">
        {/* Media */}
        <div className="w-full h-[60vh] center">
          <div ref={mediaRef} className="relative overflow-hidden">
            <img
              onLoad={() => {
                setClientSize({
                  width: imageRef.current.clientWidth,
                  height: imageRef.current.clientHeight,
                });
              }}
              ref={imageRef}
              src={tempImg}
              alt="Edit"
              className="object-contain w-full h-full"
            />
            <Rnd
              bounds={"parent"}
              size={size}
              position={{ ...position }}
              onDragStop={(e, d) => {
                setPosition({ x: d.x, y: d.y });
              }}
              enableResizing={false}
              style={{
                boxShadow: "0px 0px 1px 100vmax rgba(255,255,255,0.5)",
              }}
              className="rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <canvas ref={previewCanvasRef} className="rounded-full" />
            </div>
          </div>
        </div>
        {/* Photo transformation */}
        <PhotoTransformationBar type={2} className={"w-full font-ubuntu"} />
        {/* Zoom */}
        <div className="row text-[36px] leading-[43.57px] gap-x-[11px] w-[68%]">
          <button onClick={handleDecreaseZoom}>-</button>
          <input
            type="range"
            min={1}
            max={100}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
            style={{
              backgroundImage: `linear-gradient(90deg, #BFB2F3 ${zoom}%,#777777 ${zoom}%)`,
            }}
            className="adjustment-range flex-1"
          />
          <button onClick={handleIncreaseZoom}>+</button>
        </div>
      </div>
    </BackModal>
  );
};

export default ChangePhotoModal;
