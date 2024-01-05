import { Link, useNavigate } from "react-router-dom";
import backIcon from "~/assets/back.svg";
import logoIcon from "~/assets/logo.png";

const NavigateButton = ({ path }) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[17px] left-[15px] row gap-x-[15px]">
      <button onClick={() => navigate(path || -1)} className="hover-default">
        <img src={backIcon} alt="Back" />
      </button>
      <Link to={"/"}>
        <img src={logoIcon} alt="Logo" className="w-[50px]" />
      </Link>
    </div>
  );
};

export default NavigateButton;
