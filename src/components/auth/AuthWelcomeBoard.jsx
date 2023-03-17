import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import maskImg from "../../assets/login-mask.png";
import Logo from "../Logo";

const AuthWelcomeBoard = ({
  backgroundImg,
  title,
  subtitle,
  btnTitle,
  btnLabel,
  btnPath,
  btnWidth,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(btnPath);
  };
  return (
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
          <Logo textColor={'white'}/>
          <p className="mt-[17px] font-bold text-4xl text-white opacity-90">
            Share your passion with us!
          </p>
          <Divider className="w-[100px] min-w-[100px] mt-[9px] mb-0 border-[#D9D9D9]" />
          <h2 className="font-bold text-32 text-white mt-[52px]">{title}</h2>
          <p className="text-[18px] tracking-wider text-white mt-[8px]">
            {subtitle}
          </p>
          <div className="bottom-[75px] absolute row gap-x-[12px]">
            <p className="text-[18px] text-white">{btnTitle}</p>
            <button
              onClick={handleOnClick}
              style={{ width: btnWidth + "px" }}
              className={`bg-[#FFFFFF1A] border-2 border-[#FFFFFFB2] rounded-5 font-bold text-[18px] text-white h-[30px] p-0 flex items-center justify-center`}
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWelcomeBoard;
