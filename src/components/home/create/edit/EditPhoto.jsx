import EditContainer from "./EditContainer";
import { editFeatures } from "../../../../constants/createFeatures";

const EditPhoto = ({ fileList, currentSlide,setCurrFeature }) => {
  return (
    <EditContainer onBack={()=>setCurrFeature("create")}>
      <div className="pt-[13px]">
        {/* Media */}
        <div className="current-media-container">
          <img
            src={fileList[currentSlide].url}
            alt="Edit"
            className="current-media"
          />
        </div>
        {/* Edit features */}
        <div className="edit-bar mt-[19px]">
          {editFeatures.map((item, i) => (
            <button
              key={i}
              onClick={() => setCurrFeature(item.id)}
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
