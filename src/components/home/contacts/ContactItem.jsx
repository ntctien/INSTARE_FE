import getDateString from "~/utils/getDateString";
import Avatar from "../Avatar";

const ContactItem = ({ maxWidth, item, onClick, loading }) => {
  return (
    <div
      className="between-row flex-none cursor-pointer hover:bg-[#bfb2f336] p-[11px]"
      onClick={onClick}
    >
      {/* Avatar */}
      <div className="w-[50px]">
        <Avatar ava={item?.user?.ava} loading={loading} />
      </div>
      {/* Message */}
      <div className="flex items-end flex-1">
        <div
          style={{ fontWeight: !item?.message?.read && 700 }}
          className="ml-[10px] flex-1 contact-item-read"
        >
          <h3
            className={loading && "loading-animation text-transparent w-[30%]"}
          >
            {loading ? "loading" : item?.user?.name ?? item?.user?.username}
          </h3>
          <p
            style={{ maxWidth: !loading && maxWidth + "px" }}
            className={`mt-1 truncate ${
              loading && "loading-animation text-transparent w-full"
            }`}
          >
            {loading
              ? "loading"
              : [".jpg", ".jpeg", ".png", "blob"].some((type) =>
                  item?.message?.message?.includes(type)
                )
              ? "Sent an image"
              : item?.message?.message}
          </p>
        </div>
        {!loading && (
          <>
            <p className="mx-[2px] mb-[3px] contact-item-time">.</p>
            <p className="contact-item-time">
              {getDateString(item?.message?.createdAt)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
