import { Divider } from "antd";

const Modal = ({ children, open, onCancel, title }) => {
  if (open)
    return (
      <>
        <div
          className="w-screen h-screen bg-black50 absolute top-0 left-0"
          onClick={onCancel}
        ></div>
        <div className="bg-modal-bg absolute-center z-10 rounded-15 overflow-hidden">
          {/* Title */}
          <h2 className="text-center mt-[12px] font-ubuntu font-medium text-20">
            {title}
          </h2>
          <Divider className="mt-[13px] mb-0 border-black15" />
          {/* Content */}
          {children}
        </div>
      </>
    );
};

export default Modal;
