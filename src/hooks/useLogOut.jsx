import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "~/actions/auth";

const useLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(logOut());
    navigate("/signin");
  };
  return handleLogOut;
};

export default useLogOut;
