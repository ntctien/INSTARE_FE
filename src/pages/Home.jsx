import Contacts from "../components/home/Contacts";
import UserInfo from "../components/home/UserInfo";

const Home = () => {
  return (
    <>
      {/* Left side */}
      <div className="flex-1"></div>
      {/* Right side */}
      <div className="w-[300px] bg-pastel-purple flex flex-col">
        {/* User info */}
        <UserInfo/>
        {/* Contacts */}
        <Contacts/>
      </div>
    </>
  );
};

export default Home;
