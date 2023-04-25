import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./HomeLayout.css";
import AppMenu from "../../components/home/menu/AppMenu";
import CreatePostModal from "../../components/home/create/CreatePostModal";
import UserInfo from "~/components/home/user_info/UserInfo";
import Contacts from "~/components/home/contacts/Contacts";

const HomeLayout = () => {
  const [menuItemId, setMenuItemId] = useState({
    current: "home",
    previous: "home",
  });

  return (
    <div
      className="flex w-screen h-screen relative"
      style={{
        background:
          " linear-gradient(270deg, rgba(191, 178, 243, 0.15) 0%, rgba(150, 202, 247, 0.15) 100%)",
      }}
    >
      {/* App menu  */}
      <AppMenu menuItemId={menuItemId} setMenuItemId={setMenuItemId} />
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      {/* User info & contacts */}
      <div className="bg-pastel-purple flex flex-col w-[300px]">
        {/* User info */}
        <UserInfo />
        {/* Contacts */}
        <Contacts />
      </div>
      {menuItemId.current === "create" && (
        <CreatePostModal
          menuItemId={menuItemId}
          setMenuItemId={setMenuItemId}
        />
      )}
    </div>
  );
};

export default HomeLayout;
