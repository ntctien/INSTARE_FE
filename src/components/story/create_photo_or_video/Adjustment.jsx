import { useContext, useEffect, useRef } from "react";
import domtoimage from "dom-to-image";
import AdjustmentBar from "~/components/home/create/edit/AdjustmentBar";
import { StoryContext } from "~/contexts/StoryContext";
import useAdjustment from "~/hooks/useAdjustment";
import getPreserveQualitySettings from "~/utils/getPreserveQualitySettings";

const Adjustment = ({setMenuBarProps, setComponent}) => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);
  const { story, setStory } = useContext(StoryContext);
  const { adjustmentBarProps, getMediaStyle, getMediaCoverBackground } =
    useAdjustment();

  const handleDone = () => {
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

  useEffect(() => {
    setMenuBarProps((prev) => {
      return { ...prev, onPrimaryBtnClick: handleDone };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="flex items-start gap-x-[35px]">
      <div className="create-story-media-container">
        <div ref={mediaRef} className="relative">
          <img
            ref={imageRef}
            src={story}
            alt="Edit"
            style={getMediaStyle()}
            className="create-story-media"
          />
          {/* Image cover */}
          <div
            style={{ background: getMediaCoverBackground() }}
            className="absolute w-full h-full top-0 left-0"
          />
        </div>
      </div>
      <AdjustmentBar {...adjustmentBarProps} style={{ rowGap: "35px" }} />
    </div>
  );
};

export default Adjustment;
