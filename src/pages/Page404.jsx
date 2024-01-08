import { useNavigate } from "react-router-dom";
import ghostIcon from "~/assets/ghost.svg";
import SignatureButton from "~/components/buttons/SignatureButton";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="col-items-center">
      <img src={ghostIcon} alt="Ghost" />
      <h1 className="font-ubuntu font-medium leading-[70px] text-40 text-[#2C2B2B] mt-[11px]">
        Oops, This Page Could Not Be Found.
      </h1>
      <p className="font-extrabold text-[#908D8D] text-20 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily inaccessible.
      </p>
      <SignatureButton
        className={"mt-4 max-w-[230px]"}
        onClick={() => navigate("/")}
      >
        Return home
      </SignatureButton>
    </div>
  );
};

export default Page404;
