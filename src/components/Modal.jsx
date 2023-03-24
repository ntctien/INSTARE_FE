import { Divider } from "antd";
import closeIcon from "../assets/close.svg";

const Modal = ({ children, open, onCancel, title }) => {
  if (open)
    return (
      <>
        <div
          className="w-screen h-screen bg-black50 absolute"
          onClick={onCancel}
        ></div>
        <div className="bg-modal-bg absolute-center z-10 rounded-15">
          {/* Title */}
          <h2 className="text-center mt-[12px] font-ubuntu font-medium text-20">
            {title}
          </h2>
          <Divider className="mt-[13px] mb-0 border-black15" />
          {/* Content */}
          {children}
          {/* Close button */}
          <button onClick={onCancel} className="absolute top-[11.5px] right-[13.5px]">
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
      </>
    );
};

export default Modal;
