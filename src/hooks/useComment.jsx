import { useState } from "react";
import { useSelector } from "react-redux";
import comment from "~/api/services/interact/comment";

const useComment = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [commentValue, setCommentValue] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  const handleComment = async (e, postId, updateComments) => {
    e.preventDefault();
    setCommentLoading(true);
    await comment(currentUser.token, postId, commentValue)
      .then(() => {
        updateComments(commentValue);
        setCommentValue("");
      })
      .catch((err) => console.log(err));
    setCommentLoading(false);
  };

  const commentInputProps = {
    value: commentValue,
    onChange: (e) => setCommentValue(e.target.value),
    loading: commentLoading,
  };

  return { commentInputProps, handleComment };
};

export default useComment;
