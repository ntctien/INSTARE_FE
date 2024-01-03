import React, { useRef } from "react";
import PostHeader from "./PostHeader";
import { Divider } from "antd";
import InteractBar from "~/components/InteractBar";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import CommentInput from "~/components/CommentInput";
import useComment from "~/hooks/useComment";

const PostDetail = ({
  postHeaderData,
  caption,
  interactBarProps,
  comments,
  handleComment,
}) => {
  const { commentInputProps } = useComment();
  const commentInputRef = useRef(null);

  return (
    <div className="flex-1 bg-[#F4F4FD] flex flex-col">
      {/* Content */}
      <div className="p-5">
        <PostHeader post={postHeaderData} />
        <p className="ml-[68px] pr-[12%] text-14 w-[87%] h-[40vh] mt-2">
          {caption}
        </p>
      </div>
      <Divider className="default-divider" />
      <InteractBar
        {...interactBarProps}
        onCommentClick={() => commentInputRef.current?.focus()}
      />
      {/* Comment section */}
      <div className="flex flex-col flex-1 gap-y-5 px-[17px] overflow-y-auto">
        {comments?.map((comment, i) => (
          <div key={i} className="row gap-x-[18px]">
            <Link to={`/${comment.user.username}`}>
              <Avatar ava={comment.user.ava} />
            </Link>
            <p className="text-14 flex-1">
              <Link to={`/${comment.user.username}`}>
                <span className="font-semibold">{comment.user.username}</span>
              </Link>{" "}
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
      <Divider className="default-divider" />
      <form
        onSubmit={handleComment}
        className="px-[17px] pt-[6px] pb-[9px] bg-[#EDF1F8]"
      >
        <CommentInput inputRef={commentInputRef} {...commentInputProps} />
      </form>
    </div>
  );
};

export default PostDetail;
