import PostFeed from "../components/home/post/PostFeed";
import StoryContainer from "../components/story/StoryContainer";

const Home = () => {
  return (
    <div className="px-[40px] py-[31px] flex flex-col items-center">
      <StoryContainer />
      <PostFeed />
    </div>
  );
};

export default Home;
