import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-bg flex items-center">
      <div className="bg-white h-[88%] rounded-[40px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
