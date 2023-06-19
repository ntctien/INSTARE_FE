import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import { menuItems } from "../../constants/menuItems";
import AppMenuItem from "./AppMenuItem";
import MoreItem from "./MoreItem";
import SearchSideBar from "../search/SearchSideBar";
import NotificationSideBar from "../notification/NotificationSideBar";
import { WebsocketContext } from "~/contexts/WebsocketContext";
import { AppMenuContext } from "~/contexts/AppMenuContext";

const AppMenu = ({ menuItemId, setMenuItemId }) => {
  const location = useLocation();
  const { socket } = useContext(WebsocketContext);
  const { newMessage, setNewMessage } = useContext(AppMenuContext);
  const [newNotification, setNewNotification] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/message"))
      setMenuItemId({
        current: "messages",
        previous: "messages",
      });
    else if (location.pathname === "/")
      setMenuItemId({
        current: "home",
        previous: "home",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!socket) return;
    socket.on("onNotification", () => {
      setNewNotification(true);
    });

    return () => {
      socket.off("onNotification");
    };
  }, [socket]);

  const handleCloseSideBar = (id) => {
    setMenuItemId({ current: menuItemId.previous, previous: id });
  };

  const handleItemClick = (id) => {
    switch (id) {
      case "notifications":
        setNewNotification(false);
        break;
      case "messages":
        setNewMessage(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-full w-[260px] bg-pastel-blue pt-[46px] pb-[15px] px-[16px] flex flex-col font-ubuntu rounded-r-15 relative">
      <Logo custom={"ml-[9px]"} />
      <div className="mt-[57px] flex-1 flex flex-col gap-y-[20px]">
        {menuItems.map((item, i) => (
          <AppMenuItem
            key={i}
            item={item}
            menuItemId={menuItemId}
            setMenuItemId={setMenuItemId}
            newNotification={newNotification}
            newMessage={newMessage}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
      <MoreItem menuItemId={menuItemId} setMenuItemId={setMenuItemId} />
      {menuItemId.current === "search" ? (
        <SearchSideBar onClose={() => handleCloseSideBar("search")} />
      ) : (
        menuItemId.current === "notifications" && (
          <NotificationSideBar
            onClose={() => handleCloseSideBar("notifications")}
          />
        )
      )}
    </div>
  );
};

export default AppMenu;
