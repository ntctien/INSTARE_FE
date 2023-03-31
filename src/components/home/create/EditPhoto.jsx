import {
  cropIcon,
  adjustIcon,
  filterIcon,
  textIcon,
} from "../../../assets/edit_icons";
import tempImg from "../../../assets/temp1.jpg";

const EditPhoto = () => {
  const editFeatures = [
    {
      title: "Crop",
      icon: cropIcon,
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
    <div className="pt-[13px]">
      {/* Media */}
      <div className="h-[58vh] aspect-[4/3]">
        <img
          src={tempImg}
          alt="Edit"
          className="object-contain w-full h-full"
        />
      </div>
      {/* Edit features */}
      <div className="w-full h-[100px] bg-white mt-[19px] flex items-center justify-center gap-x-[34px]">
        {editFeatures.map((item, i) => (
          <button className="flex flex-col items-center">
            <img src={item.icon} alt="Edit icon" />
            <h3 className="font-ubuntu text-20 mt-1">{item.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EditPhoto;
