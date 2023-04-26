import { useState } from "react";
import ContactItem from "~/components/home/contacts/ContactItem";
import MessageDetail from "~/components/message/MessageDetail";
import searchIcon from "~/assets/search.svg";
import SearchResultItem from "~/components/search/SearchResultItem";
import SearchInput from "~/components/search/SearchInput";

let contacts = [
  {
    name: "Phạm Thị Thu Trang",
  },
];

for (let i = 0; i <= 14; i++) {
  contacts = [...contacts, { name: "Nguyễn Trần Cẩm Tiên" }];
}

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

const Message = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="bg-[#F4F4FD] h-screen flex">
      {/* Contacts */}
      <div className="w-[360px] bg-[#F9F7FE] h-screen flex flex-col">
        {/* Search bar */}
        <div className="between-row font-ubuntu h-[70px] border-r-1 border-b-1 border-black15">
          {search ? (
            <SearchInput handleClick={() => setSearch(false)} className='mx-5'/>
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
          {search
            ? searchResults.map((result, i) => (
                <SearchResultItem key={i} {...result} />
              ))
            : contacts.map((c, i) => (
                <ContactItem key={i} name={c.name} maxWidth={200} />
              ))}
        </div>
      </div>
      {/* Message detail */}
      <MessageDetail />
    </div>
  );
};

export default Message;
