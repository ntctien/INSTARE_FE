import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Divider, Skeleton } from "antd";
import MediaSlider from "~/components/home/media_slider/MediaSlider";
import PostInfo from "~/components/PostInfo";
import InteractBar from "~/components/InteractBar";
import Avatar from "~/components/home/Avatar";
import backIcon from "~/assets/back.svg";
import logoIcon from "~/assets/logo.png";
import CommentInput from "~/components/CommentInput";
import viewPost from "~/api/services/no-auth/viewPost";
import getDateString from "~/utils/getDateString";

const Post = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState();

  const handleViewPost = async (postId) => {
    await viewPost(postId)
      .then(({ data }) => {
        setData({
          ...data,
          mediaList: data.mediaList.map((item) => {
            return {
              url: item,
              type: item.includes("/video/") ? "video" : "image",
            };
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleViewPost(postId);
  }, [postId]);

  return (
    <div
      className="flex h-screen post-detail overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(150, 202, 247, 0.15) 0.01%, rgba(191, 178, 243, 0.15) 100%), #FFFFFF",
      }}
    >
      {/* Left side */}
      <div className="w-[66vw] relative">
        {/* Image or video */}
        {data?.mediaList ? (
          <MediaSlider
            mediaList={data.mediaList}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        ) : (
          <Skeleton.Image style={{width:'100%',height:'100%'}} className="bg-[#D9D9D933] animate-pulse"/>
        )}
        {/* Navigate */}
        <div className="absolute top-[17px] left-[15px] row gap-x-[15px]">
          <button onClick={() => navigate(-1)} className="hover-default">
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
          <PostInfo
            username={data?.user.username}
            time={data?.createdAt && getDateString(data.createdAt)}
            ava={data?.user.ava}
          />
          <p className="ml-[68px] pr-[12%] text-14 w-[87%] h-[40vh]">
            {data?.caption}
          </p>
        </div>
        <Divider className="default-divider" />
        <InteractBar likeCount={2} className={"p-[17px]"} />
        {/* Comment section */}
        <div className="flex flex-col flex-1 gap-y-5 px-[17px] overflow-y-auto">
          {data?.comments.map((comment, i) => (
            <div key={i} className="row gap-x-[18px]">
              <Avatar ava={comment.user.ava} />
              <p className="text-14 flex-1">
                <span className="font-semibold">{comment.user.username}</span>{" "}
                {comment.comment}
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
