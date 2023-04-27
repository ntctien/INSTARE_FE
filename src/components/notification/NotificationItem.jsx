import React from "react";

const NotificationItem = ({ username, content, time, read }) => {
  return (
    <div className="between-row w-full font-inter px-5 py-[15px] cursor-pointer hover:bg-hover">
      <div className="row gap-x-[18px]">
        <div className="w-[50px] aspect-square rounded-full bg-grey"></div>
        <div>
          <h4
            className={`font-medium text-14 max-w-[225px] ${
              read && "text-black50"
            }`}
          >
            <span className="font-semibold">{username}</span> {content}
          </h4>
          <p
            className={`font-semibold text-12 ${
              read ? "text-black50" : "text-blue-darker"
            } mt-[6px]`}
          >
            {time}
          </p>
        </div>
      </div>
      {!read && <div className="w-[10px] aspect-square rounded-full bg-blue-darker" />}
    </div>
  );
};

export default NotificationItem;
