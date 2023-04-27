import { Link } from "react-router-dom";
import logoImg from "~/assets/logo.png";

const Logo = ({ textColor, custom, shadow }) => {
  return (
    <Link
      to={"/"}
      className={`row gap-x-[17px] ${custom}`}
      style={{ filter: shadow && "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
    >
      <img src={logoImg} alt="Logo" className="w-[50px] aspect-square" />
      <h2
        className="font-ubuntu font-medium 2xl:text-32 md:text-24 leading-[37px] tracking-widest"
        style={{ color: textColor }}
      >
        InStare
      </h2>
    </Link>
  );
};

export default Logo;
