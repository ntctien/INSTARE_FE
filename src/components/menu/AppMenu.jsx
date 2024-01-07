import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import { createItems, menuItems, reportsItem } from "../../constants/menuItems";
import AppMenuItem from "./AppMenuItem";
import MoreItem from "./MoreItem";
import SearchSideBar from "../search/SearchSideBar";
import NotificationSideBar from "../notification/NotificationSideBar";
import { WebsocketContext } from "~/contexts/WebsocketContext";
import { AppMenuContext } from "~/contexts/AppMenuContext";
import notificationAudio from "~/assets/audios/notification.mp3";
import messageAudio from "~/assets/audios/message.mp3";
import { useSelector } from "react-redux";
import ReportsSideBar from "../reports/ReportsSideBar";

const AppMenu = ({ menuItemId, setMenuItemId }) => {
  const location = useLocation();
  const { socket } = useContext(WebsocketContext);
  const { newMessage, setNewMessage } = useContext(AppMenuContext);
  const { currentUser } = useSelector((state) => state.user);
  const [newNotification, setNewNotification] = useState(false);
  const [newReport, setNewReport] = useState(false);
  const [expandingCreate, setExpandingCreate] = useState(false);

  let SideBar = null;

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

    socket.on("onReport", () => {
      setNewReport(true);
    });

    return () => {
      socket.off("onNotification");
      socket.off("onReport");
    };
  }, [socket]);

  useEffect(() => {
    if (newNotification || newReport) {
      new Audio(notificationAudio).play();
    }
  }, [newNotification, newReport]);

  useEffect(() => {
    if (newMessage) {
      new Audio(messageAudio).play();
    }
  }, [newMessage]);

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
      case "reports":
        setNewReport(false);
        break;
      default:
        break;
    }
  };

  switch (menuItemId.current) {
    case "search":
      SideBar = SearchSideBar;
      break;
    case "notifications":
      SideBar = NotificationSideBar;
      break;
    case "reports":
      SideBar = ReportsSideBar;
      break;
    default:
      SideBar = null;
      break;
  }

  const CreateMenu = ({ ...rest }) => {
    return (
      <div
        className="absolute top-0 left-0 bg-[#C7E5FF] w-full rounded-10 z-30"
        {...rest}
      >
        {createItems.map((item) => (
          <AppMenuItem
            key={item.id}
            item={item}
            menuItemId={menuItemId}
            setMenuItemId={setMenuItemId}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="h-full w-[260px] bg-pastel-blue pt-[46px] pb-[15px] px-[16px] flex flex-col font-ubuntu rounded-r-15 relative">
      <Logo custom={"ml-[9px]"} />
      <div className="mt-[57px] flex-1 flex flex-col gap-y-[20px]">
        {[...menuItems, currentUser.accountType === "ADMIN" && reportsItem].map(
          (item, i) => (
            <div
              key={i}
              className="relative"
              onMouseOver={() =>
                item.id === "create" && setExpandingCreate(true)
              }
            >
              <AppMenuItem
                item={item}
                menuItemId={menuItemId}
                setMenuItemId={setMenuItemId}
                newNotification={newNotification}
                newMessage={newMessage}
                newReport={newReport}
                onClick={() => handleItemClick(item.id)}
              />
              {item.id === "create" && expandingCreate && (
                <CreateMenu onMouseOut={() => setExpandingCreate(false)} />
              )}
            </div>
          )
        )}
      </div>
      <MoreItem menuItemId={menuItemId} setMenuItemId={setMenuItemId} />
      {SideBar && <SideBar onClose={handleCloseSideBar} />}
    </div>
  );
};

export default AppMenu;
