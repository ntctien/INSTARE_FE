import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Link
      to={"/username"}
      className="pt-[23px] pb-[36px] flex flex-col items-center justify-center"
    >
      <div className="rounded-full bg-grey w-[100px] aspect-square border-1 border-white"></div>
      <h2 className="mt-[13px] font-bold text-16 font-ubuntu">{currentUser.name}</h2>
      <p className="mt-[6px] text-16 font-ubuntu">{'@'+currentUser.username}</p>
    </Link>
  );
};

export default UserInfo;
