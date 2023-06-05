import { useContext, useState } from "react";
import { StoryContext } from "~/contexts/StoryContext";
import filters from "~/constants/filters";
import filterSample from "~/assets/filterSample.jpg";
import useEditStory from "~/hooks/useEditStory";

const Filter = ({ updateMenuBar }) => {
  const { story } = useContext(StoryContext);
  const { mediaRef, imageRef } = useEditStory(updateMenuBar);
  const [currFilter, setCurrFilter] = useState("");

  return (
    <div className="flex gap-x-[100px] h-[70vh]">
      {/* Story */}
      <div className="create-story-media-container">
        <div ref={mediaRef}>
          <figure className={currFilter}>
            <img
              ref={imageRef}
              src={story}
              alt="Edit"
              className="create-story-media"
            />
          </figure>
        </div>
      </div>
      <div className="flex flex-col gap-y-[26px] overflow-y-auto">
        {filters.map((filter, i) => (
          <div
            key={i}
            onClick={() => setCurrFilter(filter.class)}
            className="row gap-x-[38px] cursor-pointer hover:bg-hover rounded-5"
          >
            <div className="center w-[98px] h-[98px] center">
              <div
                style={{
                  width: filter.class === currFilter ? 98 : 94,
                  height: filter.class === currFilter ? 98 : 94,
                  background:
                    filter.class === currFilter
                      ? "linear-gradient(135deg, #96CAF7 0%, #BFB2F3 100%)"
                      : "white",
                }}
                className="center"
              >
                <figure className={filter.class}>
                  <img
                    src={filterSample}
                    alt="Filter sample"
                    className="w-[90px] aspect-square object-cover object-center"
                  />
                </figure>
              </div>
            </div>
            <p
              style={
                filter.class === currFilter
                  ? {
                      background:
                        "linear-gradient(90deg, #96CAF7 0%, #BFB2F3 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }
                  : null
              }
            >
              {filter.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
