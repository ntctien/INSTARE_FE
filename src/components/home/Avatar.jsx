const Avatar = ({ width, custom, ava }) => {
  return (
    <div
      className={`aspect-square bg-grey rounded-full ${custom}`}
      style={{ width: width ?? "50px" }}
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
