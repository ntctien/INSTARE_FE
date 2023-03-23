const AppMenuItem = ({ item, currItemId, setCurrItemId }) => {
  return (
    <div
      onClick={() => setCurrItemId(item.id)}
      className="row gap-x-[26px] py-[15px] pl-[16px] rounded-full cursor-pointer hover:bg-[#96caf728]"
    >
      <img
        src={currItemId === item.id ? item.selectedIcon : item.icon}
        alt="Icon"
      />
      <h5
        className={`${
          currItemId === item.id ? "font-medium" : "font-light"
        } text-[20px] leading-[23px]`}
      >
        {item.name}
      </h5>
    </div>
  );
};

export default AppMenuItem;
