import React, { useContext, useState } from "react";
import domtoimage from "dom-to-image";
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
import { useNavigate } from "react-router-dom";
import Adjustment from "~/components/story/create_photo_or_video/Adjustment";
import Text from "~/components/story/create_photo_or_video/Text";
import { StoryContext } from "~/contexts/StoryContext";
import getPreserveQualitySettings from "~/utils/getPreserveQualitySettings";

const editFeatures = [
  { id: "crop", icon: cropIcon, title: "Crop photo" },
  { id: "adjustment", icon: adjustIcon, title: "Photo adjustment" },
  { id: "filter", icon: filterIcon, title: "Add filter" },
  { id: "text", icon: textIcon, title: "Add text" },
];

const CreatePhotoVideoStory = () => {
  const navigate = useNavigate();
  const { setStory } = useContext(StoryContext);
  const [component, setComponent] = useState("result");
  const [menuBarProps, setMenuBarProps] = useState({});

  const getComponent = () => {
    switch (component) {
      case "result":
        return Result;
      case "filter":
        return Filter;
      case "adjustment":
        return Adjustment;
      case "text":
        return Text;
      default:
        break;
    }
  };

  const Component = getComponent();

  const handleEditDone = (mediaRef, imageRef) => {
    const media = mediaRef.current;
    const image = imageRef.current;
    if (!media || !image) return;
    domtoimage
      .toJpeg(media, getPreserveQualitySettings(image, media))
      .then((url) => {
        setStory(url);
        setComponent("result");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateMenuBar = (mediaRef, imageRef, handlePrimaryBtnClick) => {
    setMenuBarProps((prev) => {
      return {
        ...prev,
        onPrimaryBtnClick: () => {
          if (handlePrimaryBtnClick) handlePrimaryBtnClick();
          else handleEditDone(mediaRef, imageRef);
        },
      };
    });
  };

  return (
    <>
      <LeftBar>
        <MenuBar
          primaryBtnLabel={
            component === "result" ? "Add to story" : "Save change"
          }
          onDiscard={() => {
            if (component === "result") {
              navigate("/stories/create");
            } else {
              setComponent("result");
            }
          }}
          {...menuBarProps}
        >
          <div className="flex flex-col gap-y-[25px] mx-[16px] cursor-pointer">
            {editFeatures.map((feature, i) => (
              <div
                key={i}
                onClick={() => setComponent(feature.id)}
                className={`row gap-x-[18px] p-[10px] rounded-full hover:bg-hover ${
                  feature.id !== component &&
                  component !== "result" &&
                  "opacity-10"
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
        <Component
          updateMenuBar={updateMenuBar}
          handleEditDone={handleEditDone}
        />
      </ContentWrapper>
    </>
  );
};

export default CreatePhotoVideoStory;
