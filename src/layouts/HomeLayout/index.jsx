import { Outlet } from "react-router-dom";
import './HomeLayout.css';
import AppMenu from "../../components/home/AppMenu";

const HomeLayout = () => {
  return (
    <div className="flex w-screen h-screen">
      <AppMenu/>
      <Outlet/>
    </div>
  );
};

export default HomeLayout;
