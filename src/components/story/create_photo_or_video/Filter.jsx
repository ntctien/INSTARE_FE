import { useState } from "react";
import filters from "~/constants/filters";
import filterSample from "~/assets/filterSample.jpg";
import tempImg from "~/assets/temp1.jpg";

const Filter = () => {
  const [currFilter, setCurrFilter] = useState("");

  return (
    <div className="flex gap-x-[100px] h-[70vh]">
      {/* Story */}
      <div className="rounded-10 overflow-hidden">
        <figure className={currFilter}>
          <img
            src={tempImg}
            alt="Edit"
            className="h-[70vh] aspect-story object-cover"
          />
        </figure>
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
                filter.class === currFilter ? {
                  background:
                    "linear-gradient(90deg, #96CAF7 0%, #BFB2F3 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                } : null
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
