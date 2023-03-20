import Logo from "../../components/Logo";
import { menuItems, moreItem } from "../../constants/menuItems";
import AppMenuItem from "./AppMenuItem";

const AppMenu = () => {
  return (
    <div className="h-full w-[260px] bg-pastel-blue pt-[46px] pb-[5px] flex flex-col font-ubuntu">
      <Logo custom={'ml-[25px]'}/>
      <div className="mt-[47px] flex-1">
        {menuItems.map((item, i) => (
          <AppMenuItem key={i} item={item} />
        ))}
      </div>
      <AppMenuItem item={moreItem} />
    </div>
  );
};

export default AppMenu;
