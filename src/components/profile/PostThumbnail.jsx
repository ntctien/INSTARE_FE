import { Link } from "react-router-dom";
import multipleIcon from "~/assets/multiple.svg";
import videoIcon from "~/assets/video.svg";

const PostThumbnail = ({ item }) => {
  return (
    <Link
      to={`/post/${item.id}`}
      className="aspect-square relative cursor-pointer"
    >
      {item.containVideo ? (
        <video className="rounded-5 w-full h-full object-cover object-center bg-grey">
          <source src={item.thumbnail} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.thumbnail}
          alt="Post thumbnail"
          className="rounded-5 w-full h-full object-cover object-center bg-grey"
        />
      )}
      {item.containVideo ? (
        <img
          src={videoIcon}
          alt="Video"
          className="absolute top-[10px] right-[10px]"
        />
      ) : (
        item.multiple && (
          <img
            src={multipleIcon}
            alt="Multiple"
            className="absolute top-[10px] right-[10px]"
          />
        )
      )}
    </Link>
  );
};

export default PostThumbnail;
