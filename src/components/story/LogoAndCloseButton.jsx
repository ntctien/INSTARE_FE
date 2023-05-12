import { useNavigate } from "react-router-dom";
import CloseButton from "../buttons/CloseButton";
import Logo from "../Logo";

const LogoAndCloseButton = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={`row gap-x-[22px] z-10 ${className}`}>
      <CloseButton
        width={"41.67px"}
        fill={"#FFFFFF"}
        opacity={"0.5"}
        onClick={() => navigate("/")}
      />
      <Logo textColor={"#FFFFFF"} />
    </div>
  );
};

export default LogoAndCloseButton;
