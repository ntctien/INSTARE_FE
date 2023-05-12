import { useState } from "react";
import '~/styles/filters.css';
import EditContainer from "./EditContainer";
import filters from "~/constants/filters";
import filterSample from '~/assets/filterSample.jpg';

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
        <div className="w-[554px] h-[156px] bg-white row gap-x-[12px] overflow-x-auto horizontal-scroll mt-[19px] mx-[23px] overflow-hidden">
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
                <figure className={filter.class}>
                  <img
                    src={filterSample}
                    alt="Filter"
                    className="w-[90px] aspect-square object-cover object-center"
                  />
                </figure>
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
