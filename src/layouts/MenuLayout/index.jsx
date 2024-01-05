import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./MenuLayout.css";
import AppMenu from "../../components/menu/AppMenu";
import CreatePostModal from "../../components/home/create/CreatePostModal";
import ChangePasswordModal from "~/components/modal/ChangePasswordModal";

const MenuLayout = () => {
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
      <div className="flex-1">
        <Outlet />
      </div>
      {menuItemId.current === "post" && (
        <CreatePostModal
          menuItemId={menuItemId}
          setMenuItemId={setMenuItemId}
        />
      )}
      <ChangePasswordModal
        open={menuItemId.current === "changepw"}
        onCancel={() =>
          setMenuItemId({ current: menuItemId.previous, previous: "changepw" })
        }
      />
    </div>
  );
};

export default MenuLayout;
