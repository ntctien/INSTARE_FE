import { Link, useNavigate } from "react-router-dom";
import backIcon from "~/assets/back.svg";
import logoIcon from "~/assets/logo.png";

const NavigateButton = ({ path, suffix }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[17px] left-[15px] row">
      <button
        onClick={() => navigate(path || -1)}
        className="hover-default mr-[15px]"
      >
        <img src={backIcon} alt="Back" />
      </button>
      <Link to={"/"}>
        <img src={logoIcon} alt="Logo" className="w-[50px]" />
      </Link>
      {suffix}
    </div>
  );
};

export default NavigateButton;
