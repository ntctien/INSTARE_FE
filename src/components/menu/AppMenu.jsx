import Logo from "../Logo";
import { menuItems, moreItem } from "../../constants/menuItems";
import AppMenuItem from "./AppMenuItem";

const AppMenu = ({ menuItemId, setMenuItemId }) => {
  return (
    <div className="h-full w-[260px] bg-pastel-blue pt-[46px] pb-[15px] px-[16px] flex flex-col font-ubuntu rounded-r-15">
      <Logo custom={"ml-[9px]"} />
      <div className="mt-[57px] flex-1 flex flex-col gap-y-[20px]">
        {menuItems.map((item, i) => (
          <AppMenuItem
            key={i}
            item={item}
            menuItemId={menuItemId}
            setMenuItemId={setMenuItemId}
          />
        ))}
      </div>
      <AppMenuItem item={moreItem} />
    </div>
  );
};

export default AppMenu;
