import {
  rotateLeftIcon,
  flipHorizontalIcon,
  flipVerticalIcon,
} from "~/assets/crop_icons";

import {
  rotateLeftIcon2,
  flipHorizontalIcon2,
  flipVerticalIcon2,
} from "~/assets/transformation_icons";

const transformationItems = [
  { title: "Rotate left", icon: rotateLeftIcon, icon2: rotateLeftIcon2 },
  {
    title: "Flip horizontal",
    icon: flipHorizontalIcon,
    icon2: flipHorizontalIcon2,
  },
  {
    title: "Flip vertical",
    icon: flipVerticalIcon,
    icon2: flipVerticalIcon2,
  },
];

const PhotoTransformationBar = ({ className, type }) => {
  return (
    <div className={`between-row justify-center my-[10px] ${className}`}>
      {transformationItems.map((item, i) => (
        <div key={i} className="row gap-x-[12px]">
          <img src={type === 2 ? item.icon2 : item.icon} alt="Transformation" />
          <p className="text-16">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoTransformationBar;
