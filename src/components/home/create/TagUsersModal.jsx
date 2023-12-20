import { Divider, Row, Spin } from "antd";
import React from "react";
import CloseModal from "~/components/modal/CloseModal";
import SearchResultItem from "~/components/search/SearchResultItem";
import useSearchUser from "~/hooks/useSearchUser";
import TagItem from "./TagItem";

const TagUsersModal = ({ tags, setTags, onCancel, ...rest }) => {
  const { value, searchLoading, searchResult, handleChange } = useSearchUser();

  const isUserTagged = (user) =>
    tags.find((tag) => tag.username === user.username);

  const tagUser = (user) => {
    setTags((prev) => [...prev, user]);
  };

  const unTagUser = (username) => {
    setTags((prev) => prev.filter((value) => value.username !== username));
  };

  return (
    <CloseModal title={"Tag users"} onCancel={onCancel} {...rest}>
      <div className="w-[480px]">
        <div className="px-5 pt-[12px]">
          <input
            value={value}
            placeholder="Search"
            onChange={handleChange}
            className="search-input"
          />
          <Row className="mt-[10px] gap-x-[11px] gap-y-2 max-h-[71px] overflow-y-auto">
            {tags.map((tag) => (
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
          <button className="primary-btn" onClick={onCancel}>
            Confirm
          </button>
        </div>
      </div>
    </CloseModal>
  );
};

export default TagUsersModal;
