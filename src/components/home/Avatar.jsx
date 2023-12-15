const Avatar = ({ width, custom, ava, onClick, loading, backgroundColor }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: width ?? "50px",
        backgroundColor: backgroundColor ?? (!ava && "#D9D9D9"),
      }}
      className={`aspect-square rounded-full overflow-hidden ${
        loading && "loading-animation"
      } ${custom}`}
    >
      {(ava && !loading) && (
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
