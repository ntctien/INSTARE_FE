import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "~/actions/auth";
import Splash from "~/pages/Splash";

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const item = JSON.parse(loggedInUser);

      const now = new Date();
      const expiry = new Date(item.expiry);
      if (now < expiry) {
        dispatch(signIn(item));
      } else {
        localStorage.removeItem("user");
        navigate("/signin");
      }
    } else {
      navigate("/signin");
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading ? <Outlet /> : <Splash />;
};

export default MainLayout;
