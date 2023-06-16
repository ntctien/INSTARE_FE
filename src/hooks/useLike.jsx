import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dislikePost from "~/api/services/interact/dislikePost";
import likePost from "~/api/services/interact/likePost";

const useLike = (originalLiked, originalLikes) => {
  const { currentUser } = useSelector((state) => state.user);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [likeOpacity, setLikeOpacity] = useState(0);

  useEffect(() => {
    if (originalLiked) setLiked(originalLiked);
    if (originalLikes) setLikes(originalLikes);
  }, [originalLiked, originalLikes]);

  const handleLikeClick = async (postId) => {
    if (!liked) {
      setLikeOpacity(65);
      setLiked(true);
      setLikes((prev) => prev + 1);
      await likePost(currentUser.token, postId)
        .then(({ data }) => {})
        .catch((err) => console.log(err));
      setLikeOpacity(0);
    } else {
      setLiked(false);
      setLikes((prev) => prev - 1);
      await dislikePost(currentUser.token, postId)
        .then(({ data }) => {})
        .catch((err) => console.log(err));
    }
  };
  return { liked, likeOpacity, handleLikeClick, likes };
};

export default useLike;
