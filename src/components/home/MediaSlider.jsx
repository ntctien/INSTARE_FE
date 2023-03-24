import Slider from "react-slick";
import tempImg1 from "../../assets/temp1.jpg";

const MediaSlider = () => {
  return (
    <Slider className="bg-[#D9D9D933] w-[800px] h-[600px] media-slider" dots>
      <div className="media-container">
        <img src={tempImg1} alt="Post content" />
      </div>
      <div className="media-container">
        <img src={tempImg1} alt="Post content" />
      </div>
      <div className="media-container">
        <img src={tempImg1} alt="Post content" />
      </div>
      <div className="media-container">
        <img src={tempImg1} alt="Post content" />
      </div>
    </Slider>
  );
};

export default MediaSlider;
