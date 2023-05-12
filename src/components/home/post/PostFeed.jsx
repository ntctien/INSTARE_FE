import { useState } from "react";
import PostItem from "./PostItem";
import ShareModal from "./ShareModal";

const posts = [null, null];

const PostFeed = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="mt-[33px] flex flex-col gap-y-[15px]">
      {posts.map((post, i) => (
        <PostItem key={i} handleShare={()=>setModal("share")}/>
      ))}
      <ShareModal
        open={modal === "share"}
        handleCancel={() => setModal(null)}
      />
    </div>
  );
};

export default PostFeed;
