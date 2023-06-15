import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import domtoimage from "dom-to-image";
import BackModal from "../modal/BackModal";
import CropBar from "./CropBar";
import { Spin } from "antd";

const ChangePhotoModal = ({ open, onCancel, tempUrl, setImgUrl }) => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [zoom, setZoom] = useState(50);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clientSize, setClientSize] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!clientSize) return;

    const mediaWidth = clientSize.width;
    const mediaHeight = clientSize.height;
    const boundaryValue = mediaWidth < mediaHeight ? mediaWidth : mediaHeight;
    const newSize = (zoom * boundaryValue) / 100;
    setSize({ width: newSize, height: newSize });
  }, [zoom, clientSize]);

  useEffect(() => {
    setPosition({
      x: (mediaRef.current.offsetWidth - size.width) / 2,
      y: (mediaRef.current.offsetHeight - size.height) / 2,
    });
  }, [mediaRef, size]);

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

  const handleDone = async () => {
    canvasPreview();
    const media = previewCanvasRef.current;
    if (!media) return;
    setLoading(true);
    await domtoimage
      .toPng(media)
      .then((url) => {
        onCancel();
        setImgUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  };

  return (
    <BackModal
      open={open}
      onCancel={onCancel}
      onBack={onCancel}
      title={"Change profile photo"}
      onDone={handleDone}
    >
      <Spin spinning={loading}>
        <div className="flex flex-col items-center px-[12px] pt-[12px] pb-[33px] w-[550px]">
          {/* Media */}
          <div className="w-full h-[60vh] aspect-square center">
            <div
              ref={mediaRef}
              style={{
                height: clientSize?.width < clientSize?.height && "100%",
              }}
              className="relative overflow-hidden"
            >
              <img
                onLoad={() => {
                  setClientSize({
                    width: imageRef.current.clientWidth,
                    height: imageRef.current.clientHeight,
                  });
                }}
                ref={imageRef}
                src={tempUrl}
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
          <CropBar zoom={zoom} setZoom={setZoom} />
        </div>
      </Spin>
    </BackModal>
  );
};

export default ChangePhotoModal;
