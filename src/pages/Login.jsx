import { Checkbox, Divider } from "antd";
import backgroundImg from "../assets/login-bg.png";
import maskImg from "../assets/login-mask.png";
import AuthInput from "../components/AuthInput";

const Login = () => {
  return (
    <div
      className="aspect-[64/45] h-[90%] bg-white rounded-40 grid grid-cols-2"
      style={{ boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)" }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
          boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)",
        }}
        className="rounded-40 flex items-center justify-center bg-cover"
      >
        <div className="aspect-[5/7] h-[80%] rounded-15 relative">
          <img src={maskImg} alt="Mask" className="rounded-15 object-cover" />
          <div className="absolute top-0 px-[48px] pt-[63px] h-full">
            <div className="flex gap-x-[17px] items-end">
              <div className="w-[50px] h-[50px] bg-[#D9D9D9]"></div>
              <h2 className="font-medium text-32 leading-[37px] text-white tracking-widest">
                InStare
              </h2>
            </div>
            <p className="mt-[17px] font-bold text-4xl text-white opacity-90">
              Share your passion with us!
            </p>
            <Divider className="w-[100px] min-w-[100px] mt-[9px] mb-0 border-[#D9D9D9]" />
            <h2 className="font-bold text-32 text-white mt-[52px]">
              Welcome back!
            </h2>
            <p className="text-[18px] tracking-wider text-white mt-[8px]">
              It’s great to have you here
            </p>
            <div className="bottom-[75px] absolute row gap-x-[12px]">
              <p className="text-[18px] text-white">Don’t have an account?</p>
              <button className="bg-[#FFFFFF1A] border-2 border-[#FFFFFFB2] rounded-5 font-bold text-[18px] text-white w-[140px] h-[30px] p-0 flex items-center justify-center">
                Register here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[102px] pr-[118px] pt-[239px]">
        <h1 className="font-bold text-[40px]">Sign In</h1>
        <AuthInput
          label="Username/Email address"
          placeholder={"Enter your username/email"}
          custom="mt-[46px]"
        />
        <AuthInput
          label="Password"
          placeholder={"Enter your password"}
          custom="mt-[20px]"
          password={true}
        />
        <div className="mt-[15px] row justify-between">
          <div className="row gap-x-[11px]">
            <Checkbox />
            <p className="text-16 text-input-label">Remember me</p>
          </div>
          <button className="text-16">Forgot password</button>
        </div>
        <div className="auth-btn-container">
          <button className="auth-btn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
