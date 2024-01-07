import { Link, useLocation } from "react-router-dom";

const AppMenuItem = ({
  item,
  menuItemId,
  setMenuItemId,
  onClick,
  newNotification,
  newMessage,
  newReport,
}) => {
  const location = useLocation();

  const isCurrentItem = location.pathname.includes("report")
    ? item.id === "reports"
    : menuItemId?.current === "post"
    ? item.id === "create"
    : menuItemId?.current === item.id;

  return (
    item && (
      <Link
        to={item.link}
        onClick={() => {
          setMenuItemId &&
            setMenuItemId({ current: item.id, previous: menuItemId.current });
          onClick && onClick();
        }}
        className="row gap-x-[26px] py-[15px] pl-[16px] rounded-full cursor-pointer hover:bg-[#96caf728]"
      >
        <div className="relative">
          <img src={isCurrentItem ? item.selectedIcon : item.icon} alt="Icon" />
          {((item.id === "notifications" && newNotification) ||
            (item.id === "reports" && newReport) ||
            (item.id === "messages" && newMessage)) && (
            <div className="absolute top-0 right-0 w-[10px] aspect-square rounded-full bg-red" />
          )}
        </div>
        <h5
          className={`${
            isCurrentItem ? "font-medium" : "font-light"
          } text-[20px] leading-[23px]`}
        >
          {item.name}
        </h5>
      </Link>
    )
  );
};

export default AppMenuItem;
