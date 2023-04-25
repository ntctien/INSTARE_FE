import backIcon from "../../../../assets/back.svg";

const EditContainer = ({ children, onBack, onDone }) => {
  return (
    <>
      {children}
      {/* Done button */}
      <button
        onClick={onDone}
        className="absolute top-[12px] right-[14px] font-ubuntu font-bold text-20 text-[#3D93DE]"
      >
        Done
      </button>
      {/* Back button */}
      <button onClick={onBack} className="absolute top-[6px] left-[10px]">
        <img src={backIcon} alt="Back" />
      </button>
    </>
  );
};

export default EditContainer;
