import { Dropdown } from "antd";
import { moreItem } from "~/constants/menuItems";
import AppMenuItem from "./AppMenuItem";

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
    label: <p className="option-danger">Log out</p>,
  },
];

const MoreItem = ({ menuItemId, setMenuItemId }) => {
  const onClick = ({ key }) => {
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
