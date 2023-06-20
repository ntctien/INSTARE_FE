import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import ShareModal from "./ShareModal";
import { useSelector } from "react-redux";
import getAllPosts from "~/api/services/post/getAllPosts";

const PostFeed = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [modal, setModal] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetAllPosts = async () => {
      setLoading(true);
      await getAllPosts(currentUser.token)
        .then(({ data }) => {
          setData([
            ...data.map((d) => {
              return {
                ...d,
                mediaList: d.mediaList.map((item) => {
                  return {
                    url: item,
                    type: item.includes("/video/") ? "video" : "image",
                  };
                }),
              };
            }),
          ]);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };
    handleGetAllPosts();
  }, [currentUser.token]);

  return (
    <div className="mt-[33px] flex flex-col gap-y-[15px]">
      {loading
        ? Array.from({ length: 5 }).map((_, i) => <PostItem key={i} loading />)
        : data.map((post, i) => (
            <PostItem
              key={i}
              post={post}
              loading={loading}
              handleShare={() => setModal("share")}
            />
          ))}
      <ShareModal
        open={modal === "share"}
        handleCancel={() => setModal(null)}
      />
    </div>
  );
};

export default PostFeed;
