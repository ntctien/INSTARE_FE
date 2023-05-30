import React, { useContext, useRef } from "react";
import { StoryContext } from "~/contexts/StoryContext";

const Adjustment = () => {
  const mediaRef = useRef(null);
  const imageRef = useRef(null);
  const {story} = useContext(StoryContext);
  
  return (
    <div>
      <div className="create-story-media-container">
        <div ref={mediaRef} className="relative">
          <img
            ref={imageRef}
            src={story}
            alt="Edit"
            className="create-story-media"
          />
          {/* Image cover */}
          <div
            className="absolute w-full h-full top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Adjustment;
