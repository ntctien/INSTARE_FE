import Avatar from "../Avatar";

const ContactItem = ({ name, setCurrChat, maxWidth }) => {
  return (
    <div
      className="between-row flex-none cursor-pointer hover:bg-[#bfb2f336] p-[11px]"
      onClick={() => setCurrChat(name)}
    >
      {/* Avatar */}
      <div className="w-[50px]">
        <Avatar />
      </div>
      {/* Message */}
      <div className="flex items-end flex-1">
        <div className="ml-[10px] flex-1 contact-item-read">
          <h3>{name}</h3>
          <p style={{maxWidth:maxWidth+'px'}} className="mt-1 truncate">
            Hello, this is a read message. Hello, this is a read message. Hello,
            this is a read message. Hello, this is a read message
          </p>
        </div>
        <p className="mx-[2px] mb-[3px] contact-item-time">.</p>
        <p className="contact-item-time">11:59</p>
      </div>
    </div>
  );
};

export default ContactItem;
