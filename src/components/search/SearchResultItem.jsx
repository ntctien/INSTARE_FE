import Avatar from "../home/Avatar";
import clearIcon from "~/assets/close-outline.svg";

const SearchResultItem = ({ username, name, clearable }) => {
  return (
    <div className="between-row px-5 py-[10px] cursor-pointer hover:bg-pastel-purple">
      <div className="row gap-x-[18px]">
        <Avatar />
        <div className="text-15">
          <h4 className="font-semibold">{username}</h4>
          <p className="text-grey-dark mt-[5px]">{name}</p>
        </div>
      </div>
      {clearable && <button>
        <img src={clearIcon} alt="Clear" className="hover-default" />
      </button>}
    </div>
  );
};

export default SearchResultItem;
