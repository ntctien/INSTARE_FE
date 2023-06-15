const Avatar = ({ width, custom, ava }) => {
  return (
    <div
      className={`aspect-square rounded-full overflow-hidden ${custom}`}
      style={{ width: width ?? "50px", backgroundColor: !ava && "#D9D9D9" }}
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
