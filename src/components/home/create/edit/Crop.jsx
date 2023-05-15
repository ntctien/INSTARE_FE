import { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import PhotoTransformationBar from "./PhotoTransformationBar";
import BackModalContainer from "~/components/modal/BackModalContainer";
import CropCornerIcon from "~/components/icons/CropCornerIcon";
import useEditPhoto from "~/hooks/useEditPhoto";
import handleEditDone from "~/utils/handleEditDone";
import {
  freeIcon,
  originalIcon,
  threeTwoIcon,
  oneOneIcon,
  twoThreeIcon,
} from "~/assets/crop_icons";

const cropItems = [
  { title: "Free", icon: freeIcon, value: false },
  { title: "Original", icon: originalIcon, value: true },
  { title: "3:2", icon: threeTwoIcon, value: 3 / 2 },
  { title: "1:1", icon: oneOneIcon, value: 1 / 1 },
  { title: "2:3", icon: twoThreeIcon, value: 2 / 3 },
];

const Crop = ({ setCurrFeature, fileList, currentSlide, setFileList }) => {
  const { imageRef, mediaRef } = useEditPhoto();
  const previewCanvasRef = useRef(null);
  const [size, setSize] = useState({});
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ratio, setRatio] = useState(false);
  const [clientSize, setClientSize] = useState();

  useEffect(() => {
    const image = imageRef.current;
    if (image) {
      setClientSize({ width: image.clientWidth, height: image.clientHeight });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageRef.current]);

  useEffect(() => {
    if (clientSize) {
      setSize({ width: clientSize.width });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientSize]);

  // useEffect(() => {
  //   const canvas = previewCanvasRef.current;
  //   if (canvas && size.width) {
  //     if (ratio === false) {
  //       if (size.height) canvas.height = size.height;
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [ratio, previewCanvasRef.current]);

  const getRatioValue = () => {
    if (!clientSize) return 1;
    if (ratio === false || ratio === true)
      return clientSize.width / clientSize.height;
    return ratio;
  };

  const getCanvasHeight = () => {
    if (size.height) return size.height;
    return size.width / getRatioValue();
  };

  const canvasPreview = () => {
    const canvas = previewCanvasRef.current;
    const image = imageRef.current;
    if (!canvas || !image) return;

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("No 2d context");
    }

    const width = size.width;
    const height = getCanvasHeight();
    const clientWidth = image.clientWidth;
    const clientHeight = image.clientHeight;

    const scaleWidth = clientWidth / image.naturalWidth;
    const scaleHeight = clientHeight / image.naturalHeight;

    context.drawImage(
      image,
      position.x / scaleWidth,
      position.y / scaleHeight,
      width / scaleWidth,
      height / scaleHeight,
      0,
      0,
      width,
      height
    );
  };

  const handleDone = () => {
    if (size.width === "100%" && size.height === "100%") {
      setCurrFeature("edit");
      return;
    }
    canvasPreview();
    handleEditDone(
      previewCanvasRef,
      previewCanvasRef,
      fileList,
      currentSlide,
      setFileList,
      setCurrFeature
    );
  };

  return (
    <BackModalContainer
      onDone={handleDone}
      onBack={() => setCurrFeature("edit")}
    >
      <div className="edit-feature font-ubuntu">
        {/* Media */}
        <div className="current-media-container">
          <div ref={mediaRef} className="relative overflow-hidden">
            <img
              ref={imageRef}
              src={fileList[currentSlide].url}
              alt="Edit"
              className="current-media"
            />
            <Rnd
              bounds={"parent"}
              size={{ width: size?.width, height: getCanvasHeight() }}
              onResizeStop={(e, direction, ref, delta, position) => {
                setSize({ width: ref.clientWidth, height: ref.clientHeight });
                setPosition({ ...position });
              }}
              position={{ ...position }}
              onDragStop={(e, d) => {
                setPosition({ x: d.x, y: d.y });
              }}
              lockAspectRatio={ratio}
              style={{
                boxShadow: "0px 0px 1px 100vmax rgba(255,255,255,0.5)",
                aspectRatio: ratio,
              }}
              className="outline outline-1 outline-white"
            >
              <div>
                <CropCornerIcon className={"absolute -top-[1px] -left-[1px]"} />
                <CropCornerIcon
                  className={"absolute -top-[1px] -right-[1px] rotate-90"}
                />
                <CropCornerIcon
                  className={"absolute -bottom-[1px] -left-[1px] -rotate-90"}
                />
                <CropCornerIcon
                  className={"absolute -bottom-[1px] -right-[1px] rotate-180"}
                />
              </div>
            </Rnd>
          </div>
          <canvas
            ref={previewCanvasRef}
            width={size?.width}
            height={getCanvasHeight()}
            className="absolute top-0 left-0 -z-10"
          />
        </div>
        {/* Tranformation */}
        <PhotoTransformationBar />
        {/* Crop items */}
        <div className="edit-bar">
          {cropItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setRatio(item.value)}
              className="flex flex-col gap-y-1 items-center edit-item cursor-pointer"
            >
              <img src={item.icon} alt="Crop" />
              <p className="text-20">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </BackModalContainer>
  );
};

export default Crop;
