import EditContainer from "./EditContainer";
import {
  freeIcon,
  originalIcon,
  threeTwoIcon,
  oneOneIcon,
  twoThreeIcon,
} from "~/assets/crop_icons";
import tempImg from "~/assets/temp1.jpg";
import PhotoTransformationBar from "./PhotoTransformationBar";

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
      <div className="edit-feature font-ubuntu">
        {/* Media */}
        <div className="current-media-container">
          <img src={tempImg} alt="Edit" className="current-media" />
        </div>
        {/* Tranformation */}
        <PhotoTransformationBar className={'mx-[39px]'}/>
        {/* Crop items */}
        <div className="edit-bar">
          {cropItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-y-1 items-center">
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
