import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "~/actions/auth";
import getMe from "~/api/services/user/getMe";
import Splash from "~/pages/Splash";

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const setUserInfo = async (tokenInfo) => {
    await getMe(tokenInfo.token)
      .then(({ data }) => {
        dispatch(signIn({ ...tokenInfo, ...data }));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const checkSignInState = async () => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const tokenInfo = JSON.parse(loggedInUser);

        const now = new Date();
        const expiry = new Date(tokenInfo.expiry);
        if (now < expiry) {
          await setUserInfo(tokenInfo);
        } else {
          localStorage.removeItem("user");
          navigate("/signin");
        }
      } else {
        navigate("/signin");
      }
      setLoading(false);
    };
    checkSignInState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading ? <Outlet /> : <Splash />;
};

export default MainLayout;
