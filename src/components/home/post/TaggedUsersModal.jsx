import React from "react";
import CloseModal from "~/components/modal/CloseModal";
import SearchResultItem from "~/components/search/SearchResultItem";

const TaggedUsersModal = ({ users, ...rest }) => {
  return (
    <CloseModal title={"Tagged users"} {...rest}>
      <div className="w-[300px] max-h-[50vh] overflow-y-auto">
        {users?.map((user) => (
          <SearchResultItem key={user.id} item={user} />
        ))}
      </div>
    </CloseModal>
  );
};

export default TaggedUsersModal;
