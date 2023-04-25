import polygonIcon from "~/assets/polygon3.svg";

const options = [
  {
    title: "View profile",
    danger: false,
  },
  {
    title: "Delete chat",
    danger: true,
  },
  {
    title: "Block",
    danger: true,
  },
];

const UserOptions = () => {
  return (
    <div className="absolute -bottom-1 left-0">
      <img src={polygonIcon} alt="Polygon" className="" />
      <div className="w-[150px] h-[120px] bg-white rounded-10 absolute top-2 -right-2 border-1 border-grey flex flex-col">
        {options.map((option, i) => (
          <p
            className={`flex-1 flex items-center cursor-pointer hover:bg-hover rounded-10 justify-center font-ubuntu font-medium text-15 text-center ${
              option.danger ? "text-red" : "font-medium"
            }`}
          >
            {option.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserOptions;
