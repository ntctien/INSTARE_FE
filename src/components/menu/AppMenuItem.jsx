import { Link } from "react-router-dom";

const AppMenuItem = ({ item, menuItemId, setMenuItemId }) => {
  return (
    <Link
      to={item.link}
      onClick={() =>
        setMenuItemId &&
        setMenuItemId({ current: item.id, previous: menuItemId.current })
      }
      className="row gap-x-[26px] py-[15px] pl-[16px] rounded-full cursor-pointer hover:bg-[#96caf728]"
    >
      <img
        src={menuItemId?.current === item.id ? item.selectedIcon : item.icon}
        alt="Icon"
      />
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
