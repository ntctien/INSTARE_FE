import { Outlet, useNavigate } from "react-router-dom";
import "./StoryLayout.css";
import Logo from "~/components/Logo";
import CloseButton from "~/components/CloseButton";

const StoryLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-dark w-screen h-screen relative text-white">
      <div className="row gap-x-[22px] absolute top-[17px] left-[24px] z-10">
        <CloseButton
          width={"41.67px"}
          fill={"#FFFFFF"}
          opacity={"0.5"}
          onClick={() => navigate('/')}
        />
        <Logo textColor={"#FFFFFF"} />
      </div>
      <Outlet />
    </div>
  );
};

export default StoryLayout;
