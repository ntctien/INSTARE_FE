import { useSelector } from "react-redux";
import { Spin } from "antd";
import Avatar from "./home/Avatar";
import { ReactComponent as LoadingIcon } from "~/assets/loading.svg";

const CommentInput = ({ value, onChange, loading, inputRef }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Spin
      spinning={loading}
      indicator={<LoadingIcon />}
      className="custom-spin-small"
    >
      <div className="row gap-x-[13px]">
        <Avatar width={"30px"} ava={currentUser.ava} />
        <input
          ref={inputRef}
          placeholder="Add a comment..."
          maxLength={250}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent hover:border-none focus:outline-none flex-1 text-14 placeholder:text-black50"
        />
        <button
          type="submit"
          disabled={value?.length < 1}
          className={`font-bold text-14 ${
            value?.length > 0
              ? "text-blue-darker hover:brightness-125"
              : "text-blue"
          }`}
        >
          Post
        </button>
      </div>
    </Spin>
  );
};

export default CommentInput;
