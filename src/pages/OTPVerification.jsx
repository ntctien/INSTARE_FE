import { useNavigate } from "react-router-dom";
import AuthInput from "~/components/auth/AuthInput";

const OTPVerification = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="title">OTP Verification</h1>
      <p className="subtitle">
        Enter the verification code sent to email abc@gmail.com
      </p>
      <AuthInput placeholder={"Code"} custom={"mt-[25px]"} />
      <button onClick={()=>navigate('/new-password')} className="auth-btn mt-[21.3%]">
        Verify
      </button>
      <p className="text-16 md:text-14 text-grey-dark mt-2">
        Didn’t receive the OTP?{" "}
        <span className="font-medium text-black">RESEND OTP</span>
      </p>
    </>
  );
};

export default OTPVerification;
