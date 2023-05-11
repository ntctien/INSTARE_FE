import { useState } from "react";
import EditContainer from "./EditContainer";
import tempImg from "~/assets/temp1.jpg";

const filters = [
  { name: "Original", image: tempImg },
  { name: "Chrome", image: tempImg },
  { name: "Fade", image: tempImg },
  { name: "Mono", image: tempImg },
  { name: "Noir", image: tempImg },
];

const gradient = "linear-gradient(to right,#96CAF7 0%,#BFB2F3 100%)";

const Filter = ({ fileList, currentSlide, setCurrFeature }) => {
  const [currFilter, setCurrFilter] = useState(0);

  return (
    <EditContainer onBack={() => setCurrFeature("edit")}>
      <div className="edit-feature">
        {/* Media */}
        <div className="current-media-container">
          <img
            src={fileList[currentSlide].url}
            alt="Edit"
            className="current-media"
          />
        </div>
        {/* Edit features */}
        <div className="w-full h-[156px] bg-white flex items-center justify-center gap-x-[12px] mt-[19px]">
          {filters.map((filter, i) => (
            <div
              key={i}
              onClick={() => setCurrFilter(i)}
              className="cursor-pointer"
            >
              <div
                style={{
                  backgroundImage:
                    i === currFilter &&
                    gradient,
                }}
                className="w-[98px] aspect-square flex items-center justify-center"
              >
                <img
                  src={filter.image}
                  alt="Filter"
                  className="w-[90px] aspect-square object-cover object-center"
                />
              </div>
              <p
                key={`${gradient}`}
                style={
                  i === currFilter
                    ? {
                        background: gradient,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }
                    : null
                }
                className="font-ubuntu text-14 mt-[10px] text-center"
              >
                {filter.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </EditContainer>
  );
};

export default Filter;
