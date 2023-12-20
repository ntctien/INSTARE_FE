import Avatar from "../home/Avatar";
import clearIcon from "~/assets/close-outline.svg";

const SearchResultItem = ({
  item,
  clearable,
  suffix,
  selected,
  onClick,
  handleClear,
}) => {
  return (
    <div
      onClick={onClick}
      className={`between-row px-5 py-[10px] cursor-pointer ${
        !selected ? "hover:bg-pastel-purple" : "bg-pastel-purple"
      }`}
    >
      <div className="row gap-x-[18px]">
        <Avatar ava={item?.ava} />
        <div className="text-15">
          <h4 className="font-semibold">{item?.username}</h4>
          <p className="text-grey-dark mt-[5px]">{item?.name}</p>
        </div>
      </div>
      {clearable && (
        <button onClick={handleClear}>
          <img src={clearIcon} alt="Clear" className="hover-default" />
        </button>
      )}
      {suffix}
    </div>
  );
};

export default SearchResultItem;
