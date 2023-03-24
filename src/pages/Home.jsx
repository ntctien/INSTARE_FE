import Contacts from "../components/home/contacts/Contacts";
import PostFeed from "../components/home/post/PostFeed";
import StoryContainer from "../components/home/story/StoryContainer";
import UserInfo from "../components/home/user_info/UserInfo";

const Home = () => {
  return (
    <>
      {/* Left side */}
      <div className="flex-1 px-[40px] py-[31px] flex flex-col items-center overflow-y-auto">
        <StoryContainer />
        <PostFeed />
      </div>
      {/* Right side */}
      <div className="bg-pastel-purple flex flex-col w-[300px]">
        {/* User info */}
        <UserInfo />
        {/* Contacts */}
        <Contacts />
      </div>
    </>
  );
};

export default Home;
