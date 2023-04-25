import Modal from "./Modal";
import backIcon from "~/assets/back.svg";

const BackModal = ({ children, open, onCancel, title, onBack, onDone }) => {
  return (
    <Modal open={open} onCancel={onCancel} title={title}>
      {children}
      {/* Done button */}
      <button
        onClick={onDone}
        className="absolute top-[12px] right-[14px] font-ubuntu font-bold text-20 text-[#3D93DE]"
      >
        Done
      </button>
      {/* Back button */}
      <button onClick={onBack} className="absolute top-[12.5px] left-[16.5px]">
        <img src={backIcon} alt="Back" />
      </button>
    </Modal>
  );
};

export default BackModal;
