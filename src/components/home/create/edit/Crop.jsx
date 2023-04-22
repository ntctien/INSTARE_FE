import EditContainer from "./EditContainer";
import {
  rotateLeftIcon,
  flipHorizontalIcon,
  flipVerticalIcon,
  freeIcon,
  originalIcon,
  threeTwoIcon,
  oneOneIcon,
  twoThreeIcon,
} from "~/assets/crop_icons";
import tempImg from "~/assets/temp1.jpg";

const transformationItems = [
  { title: "Rotate left", icon: rotateLeftIcon },
  { title: "Flip horizontal", icon: flipHorizontalIcon },
  { title: "Flip vertical", icon: flipVerticalIcon },
];

const cropItems = [
  { title: "Free", icon: freeIcon },
  { title: "Original", icon: originalIcon },
  { title: "3:2", icon: threeTwoIcon },
  { title: "1:1", icon: oneOneIcon },
  { title: "2:3", icon: twoThreeIcon },
];

const Crop = ({setCurrFeature}) => {
  return (
    <EditContainer onBack={() => setCurrFeature("edit")}>
      <div className="pt-[13px] font-ubuntu">
        {/* Media */}
        <div className="current-media-container">
          <img src={tempImg} alt="Edit" className="current-media" />
        </div>
        {/* Tranformation items */}
        <div className="row gap-x-[42px] justify-center my-[10px]">
          {transformationItems.map((item, i) => (
            <div className="row gap-x-[12px]">
              <img src={item.icon} alt="Transformation" />
              <p className="text-16">{item.title}</p>
            </div>
          ))}
        </div>
        {/* Crop items */}
        <div className="edit-bar">
          {cropItems.map((item, i) => (
            <div className="flex flex-col gap-y-1 items-center">
              <img src={item.icon} alt="Crop" />
              <p className="text-20">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </EditContainer>
  );
};

export default Crop;
