import SearchInput from "./SearchInput";
import { Divider } from "antd";
import SearchResultItem from "./SearchResultItem";

let searchResults = [];

for (let i = 0; i <= 14; i++) {
  searchResults = [
    ...searchResults,
    {
      username: "username",
      name: "Họ và tên",
    },
  ];
}

const SearchSideBar = () => {
  return (
    <div
      style={{ boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)" }}
      className={`absolute top-0 -right-[360px] w-[360px] h-full bg-[#F0F6FD] z-20 rounded-r-15 flex flex-col`}
    >
      <h2 className="font-ubuntu font-bold text-20 mt-[17px] ml-[23px]">
        Search
      </h2>
      <div className="mx-5 mt-5">
        <SearchInput />
      </div>
      <Divider className="mt-[14px] mb-0 border-black15" />
      <div className="p-5">
        <div className="between-row font-ubuntu text-16">
          <h3 className="font-medium">Recent</h3>
          <button className="text-blue-darker">Clear all</button>
        </div>
      </div>
      <div className="overflow-y-auto font-inter">
        {searchResults.map((result, i) => (
          <SearchResultItem key={i} clearable {...result} />
        ))}
      </div>
    </div>
  );
};

export default SearchSideBar;
