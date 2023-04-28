import { useState } from "react";
import PhotoTransformationBar from "../home/create/edit/PhotoTransformationBar";
import BackModal from "../modal/BackModal";
import tempImg from "~/assets/temp1.jpg";

const ChangePhotoModal = ({ open, onCancel }) => {
  const [zoom, setZoom] = useState(0);

  return (
    <BackModal open={open} onCancel={onCancel} title={"Change profile photo"}>
      <div className="flex flex-col items-center px-[12px] pt-[12px] pb-[33px]">
        {/* Media */}
        <div className="h-[50vh] aspect-square">
          <img
            src={tempImg}
            alt="Edit"
            className="object-contain w-full h-full"
          />
        </div>
        {/* Photo transformation */}
        <PhotoTransformationBar type={2} className={"w-[500px] px-[19px]"} />
        {/* Zoom */}
        <div className="row text-[36px] leading-[43.57px] gap-x-[11px] w-[68%]">
          <button>-</button>
          <input
            type="range"
            min={0}
            max={100}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
            style={{ backgroundImage: `linear-gradient(90deg, #BFB2F3 ${zoom}%,#777777 ${zoom}%)` }}
            className="adjustment-range flex-1"
          />
          <button>+</button>
        </div>
      </div>
    </BackModal>
  );
};

export default ChangePhotoModal;
