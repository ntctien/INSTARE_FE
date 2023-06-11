import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const navigate = useNavigate();

  const handleSignInSuccess = (token) => {
    //Local storage for user remembering
    const date = new Date();
    date.setDate(date.getDate() + 30);
    const tokenInfo = {
      token: token,
      expiry: date,
    };
    localStorage.setItem("user", JSON.stringify(tokenInfo));

    navigate("/");
  };
  return handleSignInSuccess;
};

export default useSignIn;
