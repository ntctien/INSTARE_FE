import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./HomeLayout.css";
import AppMenu from "../../components/home/AppMenu";
import CreatePostModal from "../../components/modals/CreatePostModal";

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
      <AppMenu menuItemId={menuItemId} setMenuItemId={setMenuItemId} />
      <Outlet />
      <CreatePostModal
        open={menuItemId.current === "create"}
        onCancel={() =>
          setMenuItemId({ current: menuItemId.previous, previous: "create" })
        }
      />
    </div>
  );
};

export default HomeLayout;
