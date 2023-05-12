import CloseButton from "../buttons/CloseButton";

const SearchInput = ({ handleClick, className }) => {
  return (
    <div className={`w-full relative ${className}`}>
      <input className={"search-input"} />
      <CloseButton
        onClick={handleClick}
        width="12.5px"
        className="absolute top-1/2 -translate-y-1/2 right-[12.25px]"
      />
    </div>
  );
};

export default SearchInput;
