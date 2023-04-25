import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "antd";
import MediaSlider from "~/components/home/media_slider/MediaSlider";
import PostInfo from "~/components/PostInfo";
import InteractBar from "~/components/InteractBar";
import Avatar from "~/components/home/Avatar";
import backIcon from "~/assets/back.svg";
import logoIcon from "~/assets/logo.png";
import tempImg from "~/assets/temp1.jpg";
import CommentInput from "~/components/CommentInput";

const mediaList = [
  { url: tempImg, type: "image" },
  { url: tempImg, type: "image" },
  { url: tempImg, type: "image" },
  { url: tempImg, type: "image" },
];

let comments = [];

for (let index = 1; index <= 12; index++) {
  comments = [
    ...comments,
    {
      user: "_ptt.chang",
      content:
        "This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment.",
    },
  ];
}

const Post = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      className="flex h-screen post-detail"
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(150, 202, 247, 0.15) 0.01%, rgba(191, 178, 243, 0.15) 100%), #FFFFFF",
      }}
    >
      {/* Left side */}
      <div className="w-[66vw] relative">
        {/* Image or video */}
        <MediaSlider
          mediaList={mediaList}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
        {/* Navigate */}
        <div className="absolute top-[17px] left-[15px] row gap-x-[15px]">
          <button onClick={()=>navigate(-1)} className="hover-default">
            <img src={backIcon} alt="Back" />
          </button>
          <Link to={"/"}>
            <img src={logoIcon} alt="Logo" className="w-[50px]" />
          </Link>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 bg-[#F4F4FD] flex flex-col">
        {/* Content */}
        <div className="p-5">
          <PostInfo username={"_ptt.chang"} time={"11:59"} />
          <p className="ml-[68px] pr-[12%] text-14 w-[87%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Divider className="default-divider" />
        <InteractBar likeCount={2} className={"p-[17px]"} />
        {/* Comment section */}
        <div className="flex flex-col flex-1 gap-y-5 px-[17px] overflow-y-auto">
          {comments.map((comment, i) => (
            <div key={i} className="row gap-x-[18px]">
              <Avatar />
              <p className="text-14 flex-1">
                <span className="font-semibold">{comment.user}</span>{" "}
                {comment.content}
              </p>
            </div>
          ))}
        </div>
        <Divider className="default-divider" />
        <div className="px-[17px] pt-[6px] pb-[9px] bg-[#EDF1F8]">
          <CommentInput />
        </div>
      </div>
    </div>
  );
};

export default Post;
