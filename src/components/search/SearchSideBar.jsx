import { useState } from "react";
import { Divider } from "antd";
import SearchInput from "./SearchInput";
import SearchResultItem from "./SearchResultItem";
import WarningModal from "../modal/WarningModal";
import SideBar from "../SideBar";

let recents = [];

for (let i = 0; i <= 14; i++) {
  recents = [
    ...recents,
    {
      username: "username",
      name: "Họ và tên",
    },
  ];
}

const searchResults = [];

const SearchSideBar = ({ onClose }) => {
  const [warningOpen, setWarningOpen] = useState(false);
  return (
    <SideBar onClose={onClose}>
      <h2 className="side-bar-title mt-[17px]">
        Search
      </h2>
      <div className="mx-5 mt-5">
        <SearchInput />
      </div>
      <Divider className="mt-[14px] mb-0" />
      {searchResults.length > 0 ? (
        <div className="overflow-y-auto font-inter">
          {searchResults.map((result, i) => (
            <SearchResultItem key={i} {...result} />
          ))}
        </div>
      ) : (
        <>
          <div className="p-5">
            <div className="between-row font-ubuntu text-16">
              <h3 className="font-medium">Recent</h3>
              <button
                onClick={() => setWarningOpen(true)}
                className="text-blue-darker hover:text-blue"
              >
                Clear all
              </button>
            </div>
          </div>
          <div className="overflow-y-auto font-inter">
            {recents.map((recent, i) => (
              <SearchResultItem key={i} clearable {...recent} />
            ))}
          </div>
        </>
      )}
      <WarningModal
        title={"Clear search history?"}
        subtitle={"You won’t be able to undo this."}
        secondaryBtnLabel={"Not now"}
        primaryBtnLabel={"Clear all"}
        open={warningOpen}
        onCancel={() => setWarningOpen(false)}
      />
    </SideBar>
  );
};

export default SearchSideBar;
