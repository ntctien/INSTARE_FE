import { Dropdown } from "antd";
import { moreItem } from "~/constants/menuItems";
import AppMenuItem from "./AppMenuItem";
import ChangePasswordModal from "../modal/ChangePasswordModal";
import { useState } from "react";

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

const MoreItem = () => {
  const [modal, setModal] = useState(null);
  
  const onClick = ({ key }) => {
    setModal(key);
  };

  return (
    <>
      <Dropdown
        placement="topLeft"
        arrow
        menu={{ items: moreOptions, onClick }}
      >
        <button>
          <AppMenuItem item={moreItem} />
        </button>
      </Dropdown>
      <ChangePasswordModal
        open={modal === "changepw"}
        onCancel={() => setModal(null)}
      />
    </>
  );
};

export default MoreItem;
