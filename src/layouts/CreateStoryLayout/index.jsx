import { Outlet } from "react-router-dom";
import './CreateStoryLayout.css';
import UserInfo from "~/components/home/user_info/UserInfo";

const CreateStoryLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#96CAF726] w-[340px] rounded-r-15"></div>
      <div className="flex-1 flex flex-col">
        <h1 className="font-ubuntu font-bold text-32 mt-5 text-center">
          Create your story
        </h1>
        <div className="flex-1 flex flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div className="bg-[#BFB2F326] w-[300px] rounded-l-10">
        <UserInfo />
      </div>
    </div>
  );
};

export default CreateStoryLayout;
