import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <Link to={'/username'} className="h-[214px] flex flex-col items-center justify-center group">
      <div className="rounded-full bg-grey w-[100px] aspect-square border-1 border-white group-hover:w-[102px]"></div>
      <h2 className="mt-[13px] font-bold text-16 font-ubuntu group-hover:text-[17px]">Họ Và Tên</h2>
      <p className="mt-[6px] text-16 font-ubuntu group-hover:text-[17px]">@username</p>
    </Link>
  );
};

export default UserInfo;
