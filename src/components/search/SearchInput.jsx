import closeIcon from "~/assets/close.svg";

const SearchInput = ({ handleClick, className }) => {
  return (
    <div className={`w-full relative ${className}`}>
      <input
        className={
          "w-full h-[50px] rounded-10 bg-white focus:outline-none text-16 px-[19px]"
        }
      />
      <button
        onClick={handleClick}
        className="absolute top-1/2 -translate-y-1/2 right-[12.25px]"
      >
        <img src={closeIcon} alt="Close" className="w-[12.5px]" />
      </button>
    </div>
  );
};

export default SearchInput;
