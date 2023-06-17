const Avatar = ({ width, custom, ava, onClick, loading }) => {
  return (
    <div
      onClick={onClick}
      style={{ width: width ?? "50px", backgroundColor: !ava && "#D9D9D9" }}
      className={`aspect-square rounded-full overflow-hidden ${
        loading && "loading-animation"
      } ${custom}`}
    >
      {ava && (
        <img
          src={ava}
          alt="Avatar"
          className="w-full h-full object-cover object-center"
        />
      )}
    </div>
  );
};

export default Avatar;
