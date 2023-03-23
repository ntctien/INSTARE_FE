const Avatar = ({ width, custom }) => {
  return (
    <div
      className={`aspect-square bg-grey rounded-full ${custom}`}
      style={{ width: width ?? 50 }}
    ></div>
  );
};

export default Avatar;
