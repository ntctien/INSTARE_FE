import { Input } from "antd";

const AuthInput = ({ label, placeholder, custom, password }) => {
  const props = { className: "auth-input", placeholder: placeholder };
  return (
    <div className={custom}>
      <h5 className={`2xl:text-[16px] md:text-14 text-input-label`}>{label}</h5>
      <div className="auth-input-container">
        {password ? (
          <Input.Password {...props} />
        ) : (
          <Input {...props} />
        )}
      </div>
    </div>
  );
};

export default AuthInput;
