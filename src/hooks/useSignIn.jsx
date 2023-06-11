import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "~/actions/auth";

const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInSuccess = (token) => {
    //Local storage for user remembering
    const date = new Date();
    date.setDate(date.getDate() + 30);
    const tokenInfo = {
      token: token,
      expiry: date,
    };
    dispatch(signIn(tokenInfo));
    localStorage.setItem("user", JSON.stringify(tokenInfo));

    navigate("/");
  };
  return handleSignInSuccess;
};

export default useSignIn;
