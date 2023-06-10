import { Input } from "antd";

const AuthInput = ({
  label,
  placeholder,
  custom,
  password,
  name,
  error,
  value,
  onChange,
}) => {
  const props = { name, placeholder, value, onChange, className: "auth-input" };

  return (
    <div className={custom}>
      <h5 className={`text-[16px] md:text-14 text-input-label`}>{label}</h5>
      <div className="auth-input-container group">
        {password ? <Input.Password {...props} /> : <Input {...props} />}
      </div>
      <p className="text-[14px] text-red mt-1">{error}</p>
    </div>
  );
};

export default AuthInput;
