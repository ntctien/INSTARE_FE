import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loadingIcon from "~/assets/loading2.svg";

const Redirect = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className="absolute-center w-[360px] h-[180px] bg-white rounded-10 font-ubuntu">
      <div className="col-center">
        <h3 className="font-medium text-[28px]">Live ended</h3>
        <p className="text-16 my-[5px]">Redirect in</p>
        <div className="relative">
          <img src={loadingIcon} alt="Loading" className="animate-spin" />
          <p className="absolute-center">{count}</p>
        </div>
        <Link to={"/"} className="mt-2 text-blue-darker text-13">
          {"<< Back to home page"}
        </Link>
      </div>
    </div>
  );
};

export default Redirect;
