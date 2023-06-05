import React from "react";

const SizeEditor = ({ onChange, value, selectedColor }) => {
  return (
    <div className="relative">
      <svg
        width="225"
        height="18"
        viewBox="0 0 225 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset={`${value * 2.5}%`}
              style={{ stopColor: selectedColor || "#3C3C3C", stopOpacity: 1 }}
            />
            <stop
              offset={`${100 - value * 2.5}%`}
              style={{ stopColor: "#777777", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path d="M0 9L225 0.339745V17.6603L0 9Z" fill="url(#grad)" />
      </svg>
      <input
        type="range"
        min={1}
        max={40}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="size-range"
      />
    </div>
  );
};

export default SizeEditor;
