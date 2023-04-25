import Avatar from "./home/Avatar";

const SearchResultItem = ({ username, name }) => {
  return (
    <div className="row gap-x-[18px] px-5 py-[10px] cursor-pointer hover:bg-pastel-purple">
      <Avatar />
      <div className="text-15">
        <h4 className="font-semibold">{username}</h4>
        <p className="text-grey-dark mt-[5px]">{name}</p>
      </div>
    </div>
  );
};

export default SearchResultItem;
