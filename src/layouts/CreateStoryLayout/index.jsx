import { Outlet } from "react-router-dom";
import "./CreateStoryLayout.css";
import UserInfo from "~/components/home/user_info/UserInfo";
import { StoryProvider } from "~/contexts/StoryContext";

const CreateStoryLayout = () => {
  return (
    <div className="flex h-screen">
      <StoryProvider>
        <Outlet />
      </StoryProvider>
      {/* Right bar */}
      <div className="bg-[#BFB2F326] w-[300px] rounded-l-10">
        <UserInfo />
      </div>
    </div>
  );
};

export default CreateStoryLayout;
