import getDateString from "~/utils/getDateString";
import Avatar from "../Avatar";

const ContactItem = ({ maxWidth, item, onClick }) => {
  return (
    <div
      className="between-row flex-none cursor-pointer hover:bg-[#bfb2f336] p-[11px]"
      onClick={onClick}
    >
      {/* Avatar */}
      <div className="w-[50px]">
        <Avatar ava={item?.user?.ava} />
      </div>
      {/* Message */}
      <div className="flex items-end flex-1">
        <div
          style={{ fontWeight: !item?.message?.read && 700 }}
          className="ml-[10px] flex-1 contact-item-read"
        >
          <h3>{item?.user.name ?? item?.user?.username}</h3>
          <p style={{ maxWidth: maxWidth + "px" }} className="mt-1 truncate">
            {item?.message?.message}
          </p>
        </div>
        <p className="mx-[2px] mb-[3px] contact-item-time">.</p>
        <p className="contact-item-time">
          {getDateString(item?.message?.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
