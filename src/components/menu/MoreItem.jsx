import { Dropdown } from "antd";
import { moreItem } from "~/constants/menuItems";
import AppMenuItem from "./AppMenuItem";
import useLogOut from "~/hooks/useLogOut";

const MoreItem = ({ menuItemId, setMenuItemId }) => {
  const handleLogOut = useLogOut();

  const moreOptions = [
    {
      key: "changepw",
      label: <p className="option-default">Change password</p>,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: (
        <p onClick={handleLogOut} className="option-danger">
          Log out
        </p>
      ),
    },
  ];

  const onClick = ({ key }) => {
    if (key !== "more")
      setMenuItemId({ current: key, previous: menuItemId.current });
  };

  return (
    <Dropdown placement="topLeft" arrow menu={{ items: moreOptions, onClick }}>
      <button>
        <AppMenuItem item={moreItem} />
      </button>
    </Dropdown>
  );
};

export default MoreItem;
