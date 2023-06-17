import { useEffect, useState } from "react";
import ContactItem from "~/components/home/contacts/ContactItem";
import searchIcon from "~/assets/search.svg";
import SearchResultItem from "~/components/search/SearchResultItem";
import SearchInput from "~/components/search/SearchInput";
import getListContact from "~/api/services/chat/getListContact";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

const ContactList = ({ setCurrChat }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { userId } = useParams();
  const [search, setSearch] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    const handleGetListContact = async () => {
      setLoading(true);
      await getListContact(currentUser.token)
        .then(({ data }) => {
          console.log(data);
          setContactList(data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };

    handleGetListContact();
  }, [currentUser]);

  useEffect(() => {
    setData([...contactList.filter((item) => item.message != null)]);
  }, [contactList]);

  useEffect(() => {
    if (userId) {
      const user = contactList.find((item) => item.user.id === userId);
      setCurrChat(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, contactList]);

  return (
    <div className="w-[360px] bg-[#F9F7FE] h-screen flex flex-col">
      {/* Search bar */}
      <div className="between-row font-ubuntu h-[70px] border-r-1 border-b-1 border-black15">
        {search ? (
          <SearchInput handleClick={() => setSearch(false)} className="mx-5" />
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
          : !loading
          ? data.map((c, i) => (
              <ContactItem
                key={i}
                maxWidth={200}
                item={c}
                onClick={() => setCurrChat(c)}
              />
            ))
          : Array.from({ length: 9 }).map((_, i) => (
              <ContactItem key={i} loading />
            ))}
      </div>
    </div>
  );
};

export default ContactList;
