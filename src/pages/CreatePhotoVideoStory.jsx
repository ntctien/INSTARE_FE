import React, { useState } from "react";
import ContentWrapper from "~/components/story/ContentWrapper";
import LeftBar from "~/components/story/LeftBar";
import MenuBar from "~/components/story/MenuBar";
import {
  cropIcon,
  adjustIcon,
  filterIcon,
  textIcon,
} from "../assets/edit_icons_white";
import Result from "~/components/story/create_photo_or_video/Result";
import Filter from "~/components/story/create_photo_or_video/Filter";

const editFeatures = [
  { id: "crop", icon: cropIcon, title: "Crop photo" },
  { id: "adjustment", icon: adjustIcon, title: "Photo adjustment" },
  { id: "filter", icon: filterIcon, title: "Add filter" },
  { id: "text", icon: textIcon, title: "Add text" },
];

const CreatePhotoVideoStory = () => {
  const [component, setComponent] = useState("result");

  const getComponent = () => {
    switch (component) {
      case "result":
        return Result;
      case "filter":
        return Filter;
      default:
        break;
    }
  };

  const Component = getComponent();

  return (
    <>
      <LeftBar>
        <MenuBar primaryBtnLabel={"Add to story"}>
          <div className="flex flex-col gap-y-[25px] mx-[16px] cursor-pointer">
            {editFeatures.map((feature, i) => (
              <div
                key={i}
                onClick={() => setComponent(feature.id)}
                className={`row gap-x-[18px] p-[10px] rounded-full hover:bg-hover ${
                  (feature.id !== component && component !== 'result') && "opacity-10"
                }`}
              >
                <img src={feature.icon} alt="Edit" />
                <h3 className="font-ubuntu font-bold text-24">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </MenuBar>
      </LeftBar>
      <ContentWrapper>
        <Component />
      </ContentWrapper>
    </>
  );
};

export default CreatePhotoVideoStory;
