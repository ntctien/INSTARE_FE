import PhotoTransformationBar from "../home/create/edit/PhotoTransformationBar";

const CropBar = ({ zoom, setZoom, min = 1, max = 100 }) => {
  const handleIncreaseZoom = () => {
    if (zoom < max) setZoom(zoom + 1);
  };

  const handleDecreaseZoom = () => {
    if (zoom > min) setZoom(zoom - 1);
  };
  return (
    <>
      {/* Photo transformation */}
      <PhotoTransformationBar type={2} className={"w-full font-ubuntu"} />
      {/* Zoom */}
      <div className="row text-[36px] leading-[43.57px] gap-x-[11px] w-[68%] mx-auto">
        <button onClick={handleDecreaseZoom}>-</button>
        <input
          type="range"
          min={min}
          max={max}
          value={zoom}
          onChange={(e) => setZoom(parseInt(e.target.value))}
          style={{
            backgroundImage: `linear-gradient(90deg, #BFB2F3 ${
              ((zoom - min) / (max - min)) * 100
            }%,#777777 ${((zoom - min) / (max - min)) * 100}%)`,
          }}
          className="adjustment-range flex-1"
        />
        <button onClick={handleIncreaseZoom}>+</button>
      </div>
    </>
  );
};

export default CropBar;
