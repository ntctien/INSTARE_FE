import { Divider } from "antd";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ children, open, onCancel, title }) => {
  return (
    <ModalWrapper open={open} onCancel={onCancel}>
      <div className="bg-modal-bg rounded-15 overflow-hidden">
        {/* Title */}
        <h2 className="text-center mt-[12px] font-ubuntu font-medium text-20">
          {title}
        </h2>
        <Divider className="mt-[13px] mb-0 border-black15" />
        {/* Content */}
        {children}
      </div>
    </ModalWrapper>
  );
};

export default Modal;