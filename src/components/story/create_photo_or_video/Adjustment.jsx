import { useContext } from "react";
import AdjustmentBar from "~/components/home/create/edit/AdjustmentBar";
import { StoryContext } from "~/contexts/StoryContext";
import useAdjustment from "~/hooks/useAdjustment";
import useEditStory from "~/hooks/useEditStory";

const Adjustment = ({ updateMenuBar }) => {
  const { story } = useContext(StoryContext);
  const { mediaRef, imageRef } = useEditStory(updateMenuBar);
  const { adjustmentBarProps, getMediaStyle, getMediaCoverBackground } =
    useAdjustment();

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
