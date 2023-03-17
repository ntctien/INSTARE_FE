const AppMenuItem = ({ item }) => {
  return (
    <div className="row gap-x-[26px] py-[25px] pl-8">
      <img src={item.icon} alt="Icon" />
      <h5 className="font-light text-[20px] leading-[23px]">{item.name}</h5>
    </div>
  );
};

export default AppMenuItem;
