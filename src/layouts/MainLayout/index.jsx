import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "~/actions/auth";
import getMe from "~/api/services/user/getMe";
import Splash from "~/pages/Splash";
import { Progress } from "antd";
import { ProgressContext } from "~/contexts/ProgressContext";
import { SplashContext } from "~/contexts/SpashContext";

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { progress } = useContext(ProgressContext);
  const { splash, setSplash } = useContext(SplashContext);

  const setUserInfo = async (tokenInfo) => {
    await getMe(tokenInfo.token)
      .then(({ data }) => {
        dispatch(signIn({ ...tokenInfo, ...data }));
        setSplash(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setSplash(true);
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
    };
    checkSignInState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      {currentUser && <Outlet />}
      {progress > 0 && (
        <Progress
          percent={progress}
          status="active"
          strokeColor={{
            from: "#96caf7",
            to: "#bfb2f3",
          }}
          showInfo={false}
          className="absolute top-0 left-0"
        />
      )}
      {splash && <Splash />}
    </div>
  );
};

export default MainLayout;
