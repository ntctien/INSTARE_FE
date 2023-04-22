import EditContainer from "./EditContainer";
import { addIcon } from "../../../assets/add_text_icons";
import TextInput from "./TextInput";

const AddText = ({ setCurrFeature, fileList, currentSlide }) => {
  return (
    <EditContainer onBack={() => setCurrFeature("edit")}>
      <div className="pt-[13px] w-[600px]">
        {/* Media */}
        <div className="h-[58vh] w-fit max-w-[40vw] mx-auto relative">
          <img
            src={fileList[currentSlide].url}
            draggable={false}
            alt="Edit"
            className="current-media"
          />
          <TextInput/>
        </div>
        {/* Edit bar */}
        <div className="edit-bar mt-[19px]">
          <button className="row gap-x-[5px] bg-grey p-[5px] rounded-5">
            <img src={addIcon} alt="Add text"/>
            <h3 className="font-medium text-[20px] leading-6">CLICK TO ADD TEXT</h3>
          </button>
        </div>
      </div>
    </EditContainer>
  );
};

export default AddText;
