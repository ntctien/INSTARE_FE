import { Link } from "react-router-dom";

const AppMenuItem = ({
  item,
  menuItemId,
  setMenuItemId,
  onClick,
  newNotification,
}) => {
  return (
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
        <img
          src={menuItemId?.current === item.id ? item.selectedIcon : item.icon}
          alt="Icon"
        />
        {item.id === "notifications" && newNotification && (
          <div className="absolute top-0 right-0 w-[10px] aspect-square rounded-full bg-red" />
        )}
      </div>
      <h5
        className={`${
          menuItemId?.current === item.id ? "font-medium" : "font-light"
        } text-[20px] leading-[23px]`}
      >
        {item.name}
      </h5>
    </Link>
  );
};

export default AppMenuItem;
