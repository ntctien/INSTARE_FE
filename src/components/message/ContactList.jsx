import { useState } from "react";
import ContactItem from "~/components/home/contacts/ContactItem";
import searchIcon from "~/assets/search.svg";
import SearchResultItem from "~/components/search/SearchResultItem";
import SearchInput from "~/components/search/SearchInput";
import { useNavigate } from "react-router-dom";
import useSearchUser from "~/hooks/useSearchUser";
import { Spin } from "antd";
import { ReactComponent as LoadingIcon } from "~/assets/loading.svg";

const ContactList = ({ contactList, loading }) => {
  const navigate = useNavigate();
  const {
    value,
    searchLoading,
    searchResult,
    handleChange,
    handleClearSearch,
  } = useSearchUser();
  const [search, setSearch] = useState(false);

  const handleCloseButtonClick = () => {
    setSearch(false);
    handleClearSearch();
  };

  const handleSearchItemClick = (item) => {
    navigate(`/message/${item.id}`);
  };

  return (
    <div className="w-[360px] bg-[#F9F7FE] h-screen flex flex-col">
      {/* Search bar */}
      <div className="between-row font-ubuntu h-[70px] border-r-1 border-b-1 border-black15">
        {search ? (
          <SearchInput
            value={value}
            onChange={handleChange}
            handleClick={handleCloseButtonClick}
            className="mx-5"
          />
        ) : (
          <>
            <h1 className="font-bold text-20 ml-[23px]">Message</h1>
            <button
              onClick={() => setSearch(true)}
              className="p-[8px] hover-default mr-[15px]"
            >
              <img src={searchIcon} alt="Search" />
            </button>
          </>
        )}
      </div>
      {/* Contact items */}
      <div className="overflow-y-auto flex-1">
        {search ? (
          searchLoading ? (
            // Spin
            <div className="w-full h-full center">
              <Spin indicator={<LoadingIcon />} className="custom-spin" />
            </div>
          ) : (
            <div className="overflow-y-auto font-inter flex-1">
              {/* Search result */}
              {searchResult.length > 0
                ? searchResult.map((result, i) => (
                    <SearchResultItem
                      key={i}
                      item={result}
                      onClick={() => handleSearchItemClick(result)}
                    />
                  ))
                : // No result
                  value !== "" && (
                    <div className="w-full h-full center text-14 font-ubuntu text-grey-dark">
                      No result found.
                    </div>
                  )}
            </div>
          )
        ) : !loading ? (
          contactList.map((c, i) => (
            <ContactItem
              key={i}
              maxWidth={200}
              item={c}
              onClick={() => navigate(`/message/${c.user.id}`)}
            />
          ))
        ) : (
          Array.from({ length: 9 }).map((_, i) => (
            <ContactItem key={i} loading />
          ))
        )}
      </div>
    </div>
  );
};

export default ContactList;
