import { Spin } from "antd";

const DefaultButton = ({ children, loading, width, className, ...rest }) => {
  return (
    <button
      className={`w-[140px] rounded-10 font-medium text-base hover:brightness-105 ${className}`}
      {...rest}
    >
      {loading ? <Spin /> : children}
    </button>
  );
};

export default DefaultButton;
