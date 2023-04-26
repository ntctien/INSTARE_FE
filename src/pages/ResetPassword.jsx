import { useNavigate } from "react-router-dom";
import AuthInput from "~/components/auth/AuthInput";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="title">Reset password</h1>
      <p className="subtitle">Enter the email you used to sign up to InStare. We will send you a verification code to reset your password:</p>
      <AuthInput placeholder={"example@email.com"} custom={"mt-[7px]"} />
      <button onClick={()=>navigate('/otp')} className="auth-btn mt-[19.8%]">Search for account</button>
    </>
  );
};

export default ResetPassword;
