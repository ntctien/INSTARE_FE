import Logo from "../../components/Logo";
import { menuItems, moreItem } from "../../constants/menuItems";
import AppMenuItem from "./AppMenuItem";

const AppMenu = ({currItemId,setCurrItemId}) => {
  return (
    <div className="h-full w-[260px] bg-pastel-blue pt-[46px] pb-[15px] px-[16px] flex flex-col font-ubuntu">
      <Logo custom={'ml-[9px]'}/>
      <div className="mt-[57px] flex-1 flex flex-col gap-y-[20px]">
        {menuItems.map((item, i) => (
          <AppMenuItem key={i} item={item} currItemId={currItemId} setCurrItemId={setCurrItemId}/>
        ))}
      </div>
      <AppMenuItem item={moreItem} />
    </div>
  );
};

export default AppMenu;
