import { Outlet } from "react-router-dom";
import "./StoryLayout.css";

const StoryLayout = () => {
  return (
    <div className="bg-blue-dark w-screen h-screen relative text-white">
      <Outlet />
    </div>
  );
};

export default StoryLayout;
