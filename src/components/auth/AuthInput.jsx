import { Form, Input } from "antd";

const AuthInput = ({ label, placeholder, custom, password, name, rules, error }) => {
  const props = { className: "auth-input", placeholder: placeholder };
  return (
    <div className={custom}>
      <h5 className={`text-[16px] md:text-14 text-input-label`}>{label}</h5>
      <div className="auth-input-container group">
        <Form.Item name={name} rules={rules} noStyle>
          {password ? <Input.Password {...props} /> : <Input {...props} />}
        </Form.Item>
      </div>
      <p className="text-[14px] text-red mt-1">{error}</p>
    </div>
  );
};

export default AuthInput;
