import { Outlet } from "react-router-dom";
import './AuthLayout.css'

const AuthLayout = () => {
  return (
    <div className="auth-bg flex items-center justify-center font-ubuntu">
      <div
        className="aspect-[64/45] h-[90%] bg-white rounded-40 grid grid-cols-2"
        style={{ boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
