import { useState } from "react";
import { Divider } from "antd";
import MediaSlider from "../media_slider/MediaSlider";
import tempImg1 from "../../../assets/temp1.jpg";
import PostInfo from "~/components/PostInfo";
import InteractBar from "~/components/InteractBar";
import CommentInput from "~/components/CommentInput";

const mediaList = [
  { url: tempImg1, type: "image" },
  { url: tempImg1, type: "image" },
  { url: tempImg1, type: "image" },
  { url: tempImg1, type: "image" },
];

const PostItem = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="w-[800px] bg-[#D9D9D926] rounded-10 pb-[9px] post">
      {/* User */}
      <PostInfo username={"_ptt.chang"} time={"11:59"} className={"p-[20px]"} />
      {/* Image or video */}
      <MediaSlider
        mediaList={mediaList}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        dots
      />
      <div className="px-[20px] mt-[10px]">
        <InteractBar likeCount={2}/>
        {/* Content */}
        <p className="mt-[7px] text-14">
          <span className="font-semibold">_ptt.chang</span>
          {" " +
            "This is the first line. This is the first line. This is the first line. This is the first line. The first line end here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </p>
        {/* Comments */}
        <button className="text-14 text-black50 mt-[7px]">
          View all comments
        </button>
        <Divider className="border-black15 mt-[10px] mb-[6px]" />
        <CommentInput/>
      </div>
    </div>
  );
};

export default PostItem;
