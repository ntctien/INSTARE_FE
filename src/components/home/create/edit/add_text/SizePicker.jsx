import polygonIcon from "~/assets/polygon2.svg";

const SizePicker = ({ size, setTextInputs, textInputs, currText }) => {
  const handleOnChange = (e) => {
    const temp = [...textInputs];
    temp[currText].size = e.target.value;
    setTextInputs([...temp]);
  };
  return (
    <div className="picker-wrapper">
      <img src={polygonIcon} alt="Index" />
      <div className="bg-grey rounded-5 px-[20px] py-[15px] absolute -top-[33px] -left-[124px]">
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
                  offset={`${size * 2.5}%`}
                  style={{ stopColor: "#3C3C3C", stopOpacity: 1 }}
                />
                <stop
                  offset={`${100 - size * 2.5}%`}
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
            value={size}
            onChange={handleOnChange}
            className="size-range"
          />
        </div>
      </div>
    </div>
  );
};

export default SizePicker;
