import { Link } from "react-router-dom";
import multipleIcon from "~/assets/multiple.svg";
import videoIcon from "~/assets/video.svg";

const PostThumbnail = ({ item }) => {
  return (
    <Link to='/post' className="aspect-square relative cursor-pointer">
      <img
        src={item.src}
        alt="Post thumbnail"
        className="rounded-5 w-full h-full object-cover object-center bg-grey"
      />
      {item.multiple && (
        <img
          src={multipleIcon}
          alt="Multiple"
          className="absolute top-[10px] right-[10px]"
        />
      )}
      {item.video && (
        <img
          src={videoIcon}
          alt="Video"
          className="absolute top-[10px] right-[10px]"
        />
      )}
    </Link>
  );
};

export default PostThumbnail;
