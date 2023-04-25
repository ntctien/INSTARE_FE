const CommentInput = () => {
  return (
    <div className="row gap-x-[13px]">
      <div className="w-[30px] h-[30px] bg-grey rounded-full"></div>
      <input
        placeholder="Add a comment..."
        className="w-full bg-transparent hover:border-none focus:outline-none flex-1 text-14 placeholder:text-black50"
      />
      <button className="font-bold text-14 text-[#96CAF7]">Post</button>
    </div>
  );
};

export default CommentInput;
