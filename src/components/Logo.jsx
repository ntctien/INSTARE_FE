import { Link } from "react-router-dom";
import logoImg from '~/assets/logo.png';

const Logo = ({ textColor, custom }) => {
  return (
    <Link to={"/"} className={`row gap-x-[17px] ${custom}`}>
      <img src={logoImg} alt="Logo" className="w-[50px] aspect-square"/>
      <h2
        className="font-ubuntu font-medium text-32 leading-[37px] tracking-widest"
        style={{ color: textColor }}
      >
        InStare
      </h2>
    </Link>
  );
};

export default Logo;
