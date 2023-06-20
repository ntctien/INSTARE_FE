import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContainer from "../home/media_slider/SliderContainer";
import getAllStoryBoxes from "~/api/services/story/getAllStoryBoxes";
import { useSelector } from "react-redux";
import StoryItems from "./StoryItems";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  arrows: false,
};

const StoryContainer = () => {
  const slider = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    const handleGetAllStoryBoxes = async () => {
      setLoading(true);
      await getAllStoryBoxes(currentUser.token)
        .then(({ data }) => {
          const selfStoryBox = data.find((d) => d.id === currentUser.id);
          if (!selfStoryBox) {
            setStories([
              {
                ava: currentUser.ava,
                id: currentUser.id,
                read: true,
                username: currentUser.username,
                containStories: false,
              },
              ...data,
            ]);
          } else {
            setStories([
              { ...selfStoryBox, containStories: true },
              ...data.filter((d) => d.id !== currentUser.id),
            ]);
          }
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };
    handleGetAllStoryBoxes();
  }, [currentUser]);

  return loading ? (
    <div className="flex justify-between w-[800px]">
      <StoryItems loading={loading} stories={Array.from({ length: 6 })}/>
    </div>
  ) : stories.length >= 6 ? (
    <SliderContainer
      slider={slider}
      showPrev={currentSlide !== 0}
      showNext={currentSlide !== stories.length - 1}
      containerClassName="story-slider-container"
    >
      <Slider
        {...settings}
        ref={slider}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="w-[800px] story-container"
      >
        <StoryItems stories={stories} />
      </Slider>
    </SliderContainer>
  ) : (
    <div className="flex gap-x-[30px] justify-start w-[800px]">
      <StoryItems stories={stories} />
    </div>
  );
};

export default StoryContainer;
