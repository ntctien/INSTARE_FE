import React from "react";
import getMessageDateString from "~/utils/getMessageDateString";
import Avatar from "../home/Avatar";

const NotificationItem = ({ item, onClick, onUserClick, loading }) => {

  return (
    <div
      onClick={onClick}
      className="between-row w-full font-inter px-5 py-[15px] cursor-pointer hover:bg-hover"
    >
      <div className="row gap-x-[18px] flex-1">
        <Avatar
          width={"50px"}
          ava={item?.ava}
          onClick={onUserClick}
          loading={loading}
        />
        <div className="flex-1">
          <h4
            className={`font-medium text-14 ${
              loading
                ? "loading-animation text-transparent w-full"
                : "max-w-[225px]"
            } ${item?.read && "text-black50"}`}
          >
            <span onClick={onUserClick} className="font-semibold">
              {!loading ? item?.username : "loading"}
            </span>{" "}
            {!loading ? item?.message : "loading"}
          </h4>
          <p
            className={`font-semibold text-12 ${
              loading && "loading-animation text-transparent w-[30%]"
            } ${item?.read ? "text-black50" : "text-blue-darker"} mt-[6px]`}
          >
            {!loading ? getMessageDateString(item?.createdAt) : "loading"}
          </p>
        </div>
      </div>
      {!item?.read && !loading && (
        <div className="w-[10px] aspect-square rounded-full bg-blue-darker" />
      )}
    </div>
  );
};

export default NotificationItem;
