import { Input } from "antd";

const AuthInput = ({ label, placeholder, custom, password }) => {
  const props = { className: "auth-input", placeholder: placeholder };
  return (
    <>
      <h5 className={`text-[16px] text-input-label ${custom}`}>{label}</h5>
      <div className="auth-input-container">
        {password ? (
          <Input.Password {...props} />
        ) : (
          <Input {...props} />
        )}
      </div>
    </>
  );
};

export default AuthInput;
