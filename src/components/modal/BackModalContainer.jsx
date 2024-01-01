import backIcon from "~/assets/back.svg";
import CloseButton from "../buttons/CloseButton";

const BackModalContainer = ({ children, onBack, onDone, onCancel }) => {
  return (
    <>
      {children}
      {/* Done button */}
      {onDone && (
        <button
          onClick={onDone}
          className="absolute top-[12px] right-[14px] font-ubuntu font-bold text-20 text-[#3D93DE] hover:brightness-110"
        >
          Done
        </button>
      )}
      {/* Back button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-[6px] left-[10px] hover:bg-hover rounded-full"
        >
          <img src={backIcon} alt="Back" />
        </button>
      )}
      {/* Done button */}
      {onCancel && (
        <CloseButton
          onClick={onCancel}
          className="absolute top-[11.5px] right-[13.5px]"
        />
      )}
    </>
  );
};

export default BackModalContainer;
