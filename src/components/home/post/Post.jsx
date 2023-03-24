import Avatar from "../Avatar";
import {
  likeIcon,
  commentIcon,
  shareIcon,
  otherOptionsIcon,
} from "../../../assets/post_icons";
import { Divider } from "antd";
import MediaSlider from "../MediaSlider";

const Post = () => {
  return (
    <div className="w-[800px] bg-[#D9D9D926] rounded-10 pb-[9px] post">
      {/* User */}
      <div className="row justify-between p-[20px]">
        <div className="row">
          <Avatar />
          <h5 className="font-semibold text-14 ml-[18px]">_ptt.chang</h5>
          <p className="mx-[3px] mb-[3px] post-time">.</p>
          <p className="post-time">11:59</p>
        </div>
        <button>
          <img src={otherOptionsIcon} alt="Other options" />
        </button>
      </div>
      {/* Image or video */}
      <MediaSlider/>
      <div className="px-[20px] mt-[10px]">
        {/* Interact */}
        <div className="row gap-x-[20px]">
          <button>
            <img src={likeIcon} alt="Like" />
          </button>
          <button>
            <img src={commentIcon} alt="Comment" />
          </button>
          <button>
            <img src={shareIcon} alt="Share" />
          </button>
        </div>
        {/* Like count */}
        <p className="font-semibold text-14 mt-[10px]">2 likes</p>
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
        <div className="row gap-x-[13px]">
          <div className="w-[30px] h-[30px] bg-grey rounded-full"></div>
          <input placeholder="Add a comment..." className="w-full bg-transparent hover:border-none focus:outline-none flex-1 text-14 placeholder:text-black50" />
          <button className="font-bold text-14 text-[#96CAF7]">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
