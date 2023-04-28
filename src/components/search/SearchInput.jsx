import CloseButton from "../CloseButton";

const SearchInput = ({ handleClick, className }) => {
  return (
    <div className={`w-full relative ${className}`}>
      <input
        className={
          "w-full h-[50px] rounded-10 bg-white focus:outline-none text-16 px-[19px]"
        }
      />
      <CloseButton
        onClick={handleClick}
        width="12.5px"
        className="absolute top-1/2 -translate-y-1/2 right-[12.25px]"
      />
    </div>
  );
};

export default SearchInput;
