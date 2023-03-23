import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./HomeLayout.css";
import AppMenu from "../../components/home/AppMenu";

const HomeLayout = () => {
  const [currItemId,setCurrItemId] = useState('home');
  return (
    <div
      className="flex w-screen h-screen"
      style={{
        background:
          " linear-gradient(270deg, rgba(191, 178, 243, 0.15) 0%, rgba(150, 202, 247, 0.15) 100%)",
      }}
    >
      <AppMenu currItemId={currItemId} setCurrItemId={setCurrItemId}/>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
