import { Divider, Row, Spin } from "antd";
import useSearchUser from "~/hooks/useSearchUser";
import BackModalContainer from "~/components/modal/BackModalContainer";
import SearchResultItem from "~/components/search/SearchResultItem";
import TagItem from "./TagItem";
import { useState } from "react";

const TagUsers = ({ tags, setTags, setCurrFeature }) => {
  const { value, searchLoading, searchResult, handleChange } = useSearchUser();
  const [currTags, setCurrTags] = useState(tags);

  const isUserTagged = (user) =>
    currTags.find((tag) => tag.username === user.username);

  const tagUser = (user) => {
    setCurrTags((prev) => [...prev, user]);
  };

  const unTagUser = (username) => {
    setCurrTags((prev) => prev.filter((value) => value.username !== username));
  };

  const handleCancel = () => {
    setCurrFeature("create");
  };

  const handleConfirm = () => {
    setTags(currTags);
    handleCancel();
  };

  return (
    <BackModalContainer onBack={handleCancel} onCancel={handleCancel}>
      <div className="w-[480px]">
        <div className="px-5 pt-[12px]">
          <input
            value={value}
            placeholder="Search"
            onChange={handleChange}
            className="search-input"
          />
          <Row className="mt-[10px] gap-x-[11px] gap-y-2 max-h-[71px] overflow-y-auto">
            {currTags.map((tag) => (
              <TagItem
                key={tag.username}
                username={tag.username}
                onDelete={unTagUser}
              />
            ))}
          </Row>
          <Divider className="mt-[11px] mb-[15px]" />
        </div>
        <div className="flex flex-col h-[40vh] overflow-y-auto">
          {searchLoading ? (
            <div className="flex-1 center">
              <Spin />
            </div>
          ) : (
            searchResult.map((user, i) => (
              <SearchResultItem
                key={i}
                item={user}
                selected={isUserTagged(user)}
                onClick={() => {
                  if (!isUserTagged(user)) tagUser(user);
                  else unTagUser(user.username);
                }}
              />
            ))
          )}
        </div>
        <div className="mx-5 my-[15px]">
          <button className="primary-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </BackModalContainer>
  );
};

export default TagUsers;
