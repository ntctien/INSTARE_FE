import { Outlet } from "react-router-dom";
import './PasswordLayout.css';
import Logo from "~/components/Logo";

const PasswordLayout = () => {
  return (
    <div className="font-ubuntu col-span-2 center relative">
      <div className="w-[54%]">
        <Outlet />
      </div>
      <Logo custom={"absolute top-[33px] left-[33px]"} />
    </div>
  );
};

export default PasswordLayout;
