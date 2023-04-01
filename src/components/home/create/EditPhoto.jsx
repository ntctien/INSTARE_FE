import {
  cropIcon,
  adjustIcon,
  filterIcon,
  textIcon,
} from "../../../assets/edit_icons";
import tempImg from "../../../assets/temp1.jpg";
import { useContext } from "react";
import { FeatureContext } from "../../../contexts/FeatureContext";
import EditContainer from "./EditContainer";

const EditPhoto = () => {
  const { setCurrFeature } = useContext(FeatureContext);

  const editFeatures = [
    {
      title: "Crop",
      icon: cropIcon,
      onClick: ()=>setCurrFeature("crop")
    },
    {
      title: "Adjust",
      icon: adjustIcon,
    },
    {
      title: "Filter",
      icon: filterIcon,
    },
    {
      title: "Text",
      icon: textIcon,
    },
  ];

  return (
    <EditContainer onBack={()=>setCurrFeature("create")}>
      <div className="pt-[13px]">
        {/* Media */}
        <div className="current-media-container">
          <img
            src={tempImg}
            alt="Edit"
            className="current-media"
          />
        </div>
        {/* Edit features */}
        <div className="edit-bar mt-[19px]">
          {editFeatures.map((item, i) => (
            <button
              onClick={item.onClick}
              className="flex flex-col items-center"
            >
              <img src={item.icon} alt="Edit icon" />
              <h3 className="font-ubuntu text-20 mt-1">{item.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </EditContainer>
  );
};

export default EditPhoto;
