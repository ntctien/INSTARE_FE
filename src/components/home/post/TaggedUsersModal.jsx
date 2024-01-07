import React from "react";
import { useNavigate } from "react-router-dom";
import CloseModal from "~/components/modal/CloseModal";
import SearchResultItem from "~/components/search/SearchResultItem";

const TaggedUsersModal = ({ users, ...rest }) => {
  const navigate = useNavigate();

  return (
    <CloseModal title={"Tagged users"} {...rest}>
      <div className="w-[300px] max-h-[50vh] overflow-y-auto">
        {users?.map((user) => (
          <SearchResultItem
            key={user.id}
            item={user}
            onClick={() => navigate(`/${user.username}`)}
          />
        ))}
      </div>
    </CloseModal>
  );
};

export default TaggedUsersModal;
