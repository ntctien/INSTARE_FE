import { useContext } from "react";
import EditContainer from "./EditContainer";
import { FeatureContext } from "../../../contexts/FeatureContext";
import tempImg from "../../../assets/temp1.jpg";

const Adjustment = () => {
  const { setCurrFeature } = useContext(FeatureContext);
  return (
    <EditContainer onBack={() => setCurrFeature("edit")}>
      <div className="flex items-center font-ubuntu">
        {/* Media */}
        <div className="current-media-container">
          <img src={tempImg} alt="Edit" className="current-media" />
        </div>
        {/* Inputs */}
        <div className="flex flex-col justify-center bg-white px-5 h-[63vh] w-[25vw]">
          <div>
            <h3 className="text-16 mb-2">Brightness</h3>
            <input type="range" className="adjustment-slider" />
          </div>
        </div>
      </div>
    </EditContainer>
  );
};

export default Adjustment;
