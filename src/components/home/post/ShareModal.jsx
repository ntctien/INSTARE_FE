import { useEffect, useState } from "react";
import CloseModal from "~/components/modal/CloseModal";
import SearchResultItem from "~/components/search/SearchResultItem";

let recents = [];

for (let i = 0; i <= 14; i++) {
  recents = [
    ...recents,
    {
      username: "username",
      name: "Họ và tên",
      sent: i === 0 && true,
    },
  ];
}

let searchResults = [];

const ShareModal = ({ open, handleCancel }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setUsers([...searchResults]);
    } else {
      setUsers([...recents]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults]);

  return (
    <CloseModal title={"Share"} open={open} onCancel={handleCancel}>
      <div className="h-[75vh] aspect-[6/7] share-modal pt-[13px] flex flex-col px-[3px]">
        <div className="row gap-x-[22px] mx-5">
          <h2>Send to:</h2>
          <input className="search-input flex-1" />
        </div>
        {searchResults.length < 1 && <h2 className="mt-5 mx-5">Recent</h2>}
        <div className="overflow-y-auto font-inter mt-5 flex-1">
          {users.map((user, i) => (
            <SearchResultItem
              key={i}
              {...user}
              suffix={
                <button
                  className={`w-[70px] h-[40px] ${
                    user.sent
                      ? "bg-white border-1 border-blue-darker text-blue-darker"
                      : "bg-blue text-white"
                  } rounded-10 font-ubuntu font-medium text-16`}
                >
                  Send
                </button>
              }
            />
          ))}
        </div>
      </div>
    </CloseModal>
  );
};

export default ShareModal;
