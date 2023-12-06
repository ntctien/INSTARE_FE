import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import viewPost from "~/api/services/no-auth/viewPost";
import checkIfUserLikePost from "~/api/services/post/checkIfUserLikePost";

const usePost = (postId) => {
  const { currentUser } = useSelector((state) => state.user);
  const [post, setPost] = useState();
  const [userLiked, setUserLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleCheckIfUserLikedPost(postId);
    handleViewPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const handleViewPost = async (postId) => {
    setLoading(true);
    await viewPost(postId)
      .then(({ data }) => {
        setPost({
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
    setLoading(false);
  };

  const handleCheckIfUserLikedPost = async (postId) => {
    await checkIfUserLikePost(currentUser.token, postId)
      .then(({ data }) => setUserLiked(data))
      .catch((err) => console.log(err));
  };

  const updateComments = (commentValue) => {
    let temp = post;
    temp.comments.push({
      comment: commentValue,
      user: {
        ava: currentUser.ava,
        id: currentUser.id,
        username: currentUser.username,
      },
    });
    setPost(temp);
  };

  return {
    post,
    postId,
    userLiked,
    loading,
    updateComments,
  };
};

export default usePost;
