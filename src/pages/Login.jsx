import backgroundImg from "../assets/login-bg.png";
import maskImg from "../assets/login-mask.png";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-full">
      <img src={backgroundImg} alt="Background" className="rounded-[40px] h-full overflow-hidden" />
      <div className="h-full"></div>
    </div>
  );
};

export default Login;
