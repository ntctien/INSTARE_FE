import { useContext, useEffect, useState } from "react";
import ContactItem from "~/components/home/contacts/ContactItem";
import searchIcon from "~/assets/search.svg";
import SearchResultItem from "~/components/search/SearchResultItem";
import SearchInput from "~/components/search/SearchInput";
import getListContact from "~/api/services/chat/getListContact";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { WebsocketContext } from "~/contexts/WebsocketContext";

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

const ContactList = ({ setCurrChat, currChat }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { userId } = useParams();
  const navigate = useNavigate();
  const socket = useContext(WebsocketContext);
  const [search, setSearch] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!contactList) return;
  //   if (!currChat?.user?.id) return;
  //   socket.on("connect", () => {
  //     console.log('Connected!')
  //   });
  //   socket.on("onMessage", (result) => {
  //     console.log('alo')
  //     console.log([
  //       {
  //         ...contactList.find((item) => item.user.id === userId),
  //         message: {
  //           message: result.message,
  //           createdAt: result.createdAt,
  //           read: currChat.user.id === result.senderId ? true : false,
  //         },
  //       },
  //       ...contactList.filter(
  //         (item) => item.user.id !== result.senderId || item.message != null
  //       ),
  //     ])
  //     // setData([
  //     //   {
  //     //     ...contactList.find((item) => item.user.id === userId),
  //     //     message: {
  //     //       message: result.message,
  //     //       createdAt: result.createdAt,
  //     //       read: currChat.user.id === result.senderId ? true : false,
  //     //     },
  //     //   },
  //     //   ...contactList.filter(
  //     //     (item) => item.user.id === result.senderId || item.message != null
  //     //   ),
  //     // ]);
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("onMessage");
  //   };
  // }, [contactList, currChat?.user?.id, userId]);

  useEffect(() => {
    if (!currentUser) return;
    const handleGetListContact = async () => {
      setLoading(true);
      await getListContact(currentUser.token)
        .then(({ data }) => {
          setContactList(data);
          console.log(data);
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
      const contact = contactList.find((item) => item.user.id === userId);
      if (!contact) return;
      setCurrChat(contact);
      if (contact.message && !contact.message.read) {
        setData((prev) =>
          prev.map((item) =>
            item.user.id === userId
              ? { ...item, message: { ...item.message, read: true } }
              : item
          )
        );
      }
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
                onClick={() => navigate(`/message/${c.user.id}`)}
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
