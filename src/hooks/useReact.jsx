import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dislikePost from "~/api/services/interact/dislikePost";
import likePost from "~/api/services/interact/likePost";

const useReact = (originalLiked, originalLikes) => {
  const { currentUser } = useSelector((state) => state.user);
  const [liked, setLiked] = useState();
  const [likeCount, setLikeCount] = useState(0);
  const [likeOpacity, setLikeOpacity] = useState(0);

  useEffect(() => {
    if (originalLiked) setLiked(originalLiked);
    if (originalLikes) setLikeCount(originalLikes);
  }, [originalLiked, originalLikes]);

  const handleReact = async (postId, react = "LOVE") => {
    if (!liked) {
      setLikeCount((prev) => prev + 1);
    }
    
    if (liked === react) {
      setLiked(null);
      setLikeCount((prev) => prev - 1);
      await dislikePost(currentUser.token, postId)
        .then(({ data }) => {})
        .catch((err) => console.log(err));
    } else {
      if (react === "LOVE") setLikeOpacity(65);
      setLiked(react);
      await likePost(currentUser.token, postId, react)
        .then(({ data }) => {})
        .catch((err) => console.log(err));
      if (react === "LOVE") setLikeOpacity(0);
    }
  };
  return { liked, likeOpacity, handleReact, likeCount };
};

export default useReact;
