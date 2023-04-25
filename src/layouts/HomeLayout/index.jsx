import { Outlet } from "react-router-dom";
import "./HomeLayout.css";
import UserInfo from "~/components/home/user_info/UserInfo";
import Contacts from "~/components/home/contacts/Contacts";

const HomeLayout = () => {
  return (
    <div
      className="flex h-screen"
    >
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
      {/* User info & contacts */}
      <div className="bg-pastel-purple flex flex-col w-[300px] rounded-l-10">
        {/* User info */}
        <UserInfo />
        {/* Contacts */}
        <Contacts />
      </div>
    </div>
  );
};

export default HomeLayout;
