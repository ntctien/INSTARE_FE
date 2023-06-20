import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import sharePost from "~/api/services/interact/sharePost";
import CloseModal from "~/components/modal/CloseModal";
import SearchResultItem from "~/components/search/SearchResultItem";
import useSearchUser from "~/hooks/useSearchUser";

const ShareModal = ({ open, handleCancel, postId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { value, searchLoading, searchResult, handleChange } = useSearchUser();
  const [users, setUsers] = useState([]);
  const [recents, setRecents] = useState([]);
  const [sentList, setSentList] = useState([]);

  // Set recents
  useEffect(() => {
    const recentShare = JSON.parse(localStorage.getItem("recentShare"));
    if (recentShare && recentShare[currentUser.id])
      setRecents(recentShare[currentUser.id]);
  }, [currentUser.id]);

  useEffect(() => {
    if (searchResult.length > 0) {
      setUsers([...searchResult]);
    } else {
      setUsers([...recents]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult]);

  const saveRecent = (value) => {
    let recentShare = JSON.parse(localStorage.getItem("recentShare"));
    if (!recentShare) recentShare = {};
    if (Object.hasOwn(recentShare, currentUser.id)) {
      recentShare[currentUser.id] = recentShare[currentUser.id].filter(
        (val) => val.id !== value.id
      );
      recentShare[currentUser.id].unshift(value);
    } else {
      recentShare[currentUser.id] = [value];
    }
    localStorage.setItem("recentShare", JSON.stringify(recentShare));
  };

  const handleSend = async (user) => {
    setUsers((prev) =>
      prev.map((item) =>
        item.id === user.id ? { ...item, loading: true } : item
      )
    );
    await sharePost(
      currentUser.token,
      `http://localhost:3000/post/${postId}`,
      user.id
    )
      .then(({ data }) => {
        // Set sent list
        setSentList([...sentList, user.id]);
        //Save recent
        recents.push(user);
        saveRecent(user);
        setRecents(recents);
      })
      .catch((err) => console.log(err));
    // Set loading
    setUsers((prev) =>
      prev.map((item) =>
        item.id === user.id ? { ...item, loading: false } : item
      )
    );
  };

  return (
    <CloseModal title={"Share"} open={open} onCancel={handleCancel}>
      <div className="h-[75vh] aspect-[6/7] share-modal pt-[13px] flex flex-col px-[3px]">
        <div className="row gap-x-[22px] mx-5">
          <h2>Send to:</h2>
          <input
            value={value}
            onChange={handleChange}
            className="search-input flex-1"
          />
        </div>
        {searchResult.length < 1 && <h2 className="mt-5 mx-5">Recent</h2>}
        {searchLoading ? (
          <div className="flex-1 center">
            <Spin />
          </div>
        ) : (
          <div className="overflow-y-auto font-inter mt-5 flex-1">
            {users.map((user, i) => (
              <SearchResultItem
                key={i}
                item={user}
                suffix={
                  <button
                    onClick={() => handleSend(user)}
                    className={`w-[70px] h-[40px] ${
                      sentList.find((item) => item === user.id)
                        ? "bg-white border-1 border-blue-darker text-blue-darker"
                        : "bg-blue text-white hover:brightness-105"
                    } rounded-10 font-ubuntu font-medium text-16`}
                  >
                    {!user.loading ? "Send" : <Spin size="small" />}
                  </button>
                }
              />
            ))}
          </div>
        )}
      </div>
    </CloseModal>
  );
};

export default ShareModal;
