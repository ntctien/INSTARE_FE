import { useState } from "react";
import AuthInput from "~/components/auth/AuthInput";
import validateEmail from "~/utils/validateEmail";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (value === "") {
      return "This field is required";
    }
    if (!validateEmail(value)) return "Invalid email address";
    return null;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (error != null) {
      setError(validate(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="title">Reset password</h1>
      <p className="subtitle">
        Enter the email you used to sign up to InStare. We will send you a
        verification code to reset your password:
      </p>
      <form onSubmit={handleSubmit}>
        <AuthInput
          value={email}
          onChange={handleInputChange}
          error={error}
          placeholder={"example@email.com"}
          custom={"mt-[7px]"}
        />
        <button type="submit" className="auth-btn mt-[19.8%]">
          Search for account
        </button>
      </form>
    </>
  );
};

export default ResetPassword;
