import { useState } from "react";
import ContactItem from "~/components/home/contacts/ContactItem";
import MessageDetail from "~/components/message/MessageDetail";
import searchIcon from "~/assets/search.svg";
import closeIcon from "~/assets/close.svg";
import SearchResultItem from "~/components/SearchResultItem";

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
            <div className="w-full mx-5 relative">
              <input className="w-full h-[50px] rounded-10 bg-white focus:outline-none text-16 px-[19px]" />
              <button
                onClick={() => setSearch(false)}
                className="absolute top-1/2 -translate-y-1/2 right-[12.25px]"
              >
                <img src={closeIcon} alt="Close" className="w-[12.5px]" />
              </button>
            </div>
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
