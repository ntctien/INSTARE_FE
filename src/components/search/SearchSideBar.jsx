import { useEffect, useState } from "react";
import { Divider, Spin } from "antd";
import { ReactComponent as LoadingIcon } from "~/assets/loading.svg";
import SearchInput from "./SearchInput";
import SearchResultItem from "./SearchResultItem";
import WarningModal from "../modal/WarningModal";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useSearchUser from "~/hooks/useSearchUser";

const SearchSideBar = ({ onClose }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {
    value,
    searchLoading,
    searchResult,
    handleChange,
    handleClearSearch,
  } = useSearchUser();
  const [warningOpen, setWarningOpen] = useState(false);
  const [recents, setRecents] = useState([]);

  const saveRecent = (value) => {
    let recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
    if (!recentSearch) recentSearch = {};
    if (Object.hasOwn(recentSearch, currentUser.id)) {
      recentSearch[currentUser.id] = recentSearch[currentUser.id].filter(
        (val) => val.id !== value.id
      );
      recentSearch[currentUser.id].unshift(value);
    } else {
      recentSearch[currentUser.id] = [value];
    }
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  };

  const removeRecent = (value) => {
    let recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
    if (!recentSearch || !Object.hasOwn(recentSearch, currentUser.id)) {
      return;
    }
    recentSearch[currentUser.id] = recentSearch[currentUser.id].filter(
      (val) => val.id !== value.id
    );
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  };

  const clearRecents = () => {
    const recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
    recentSearch[currentUser.id] = [];
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));
  };
  // Set recents
  useEffect(() => {
    const recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
    if (recentSearch && recentSearch[currentUser.id])
      setRecents(recentSearch[currentUser.id]);
  }, [currentUser.id]);

  const handleSearchItemClick = (item) => {
    onClose();
    navigate(`/${item.username}`);
    recents.push(item);
    saveRecent(item);
    setRecents(recents);
  };

  const handleClearRecent = (e, recent) => {
    e.stopPropagation();
    let temp = recents;
    temp = temp.filter((value) => {
      return value.id !== recent.id;
    });
    removeRecent(recent);
    setRecents(temp);
  };

  const handleClearAllRecents = () => {
    clearRecents();
    setRecents([]);
    setWarningOpen(false);
  };

  return (
    <SideBar onClose={onClose}>
      <div className="h-full flex flex-col overflow-hidden">
        <h2 className="side-bar-title mt-[17px]">Search</h2>
        <div className="mx-5 mt-5">
          <SearchInput
            value={value}
            onChange={handleChange}
            handleClick={handleClearSearch}
          />
        </div>
        <Divider className="mt-[14px] mb-0" />
        {searchLoading ? (
          // Spin
          <div className="w-full h-full center">
            <Spin indicator={<LoadingIcon />} className="custom-spin" />
          </div>
        ) : value !== "" ? (
          <div className="overflow-y-auto font-inter flex-1">
            {/* Search result */}
            {searchResult.length > 0 ? (
              searchResult.map((result, i) => (
                <SearchResultItem
                  key={i}
                  item={result}
                  onClick={() => handleSearchItemClick(result)}
                />
              ))
            ) : (
              // No result
              <div className="w-full h-full center text-14 font-ubuntu text-grey-dark">
                No result found.
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Recents */}
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
            <div className="overflow-y-auto font-inter flex-1">
              {recents.map((recent, i) => (
                <SearchResultItem
                  key={i}
                  item={recent}
                  clearable
                  handleClear={(e) => handleClearRecent(e, recent)}
                  onClick={() => handleSearchItemClick(recent)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <WarningModal
        title={"Clear search history?"}
        subtitle={"You won’t be able to undo this."}
        secondaryBtnLabel={"Not now"}
        primaryBtnLabel={"Clear all"}
        open={warningOpen}
        onCancel={() => setWarningOpen(false)}
        onPrimaryBtnClick={handleClearAllRecents}
      />
    </SideBar>
  );
};

export default SearchSideBar;
