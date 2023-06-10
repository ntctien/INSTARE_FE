import AuthWelcomeBoard from "../components/auth/AuthWelcomeBoard";
import AuthInput from "../components/auth/AuthInput";
import backgroundImg from "../assets/signup-bg.png";
import verifyEmailForSignUp from "~/api/services/auth/verifyEmailForSignUp";
import { Form } from "antd";

const SignUp = () => {
  const [form] = Form.useForm();

  const handleVerifyEmail = async () => {
    // await verifyEmailForSignUp("sample@gmail.com", "123456", "sample")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
    form
      .validateFields()
      .then((values) => console.log(values))
      .catch((e) => console.log(e));
  };

  return (
    <>
      {/* Left Side */}
      <Form form={form} className="pl-[10.8%] pr-[17%] col-center">
        <h1 className="auth-title">Create an account</h1>
        <AuthInput
          name={"email"}
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email" },
          ]}
          label="Email"
          placeholder={"example@email.com"}
          custom="mt-[27px]"
        />
        <AuthInput
          name={"username"}
          rules={[
            { required: true, message: "Username is required" },
            {
              validator: (_, value) => {
                if (!value || value.includes(" ") || /[A-Z]/.test(value) === false) {
                  return Promise.resolve();
                } else {
                  return Promise.reject();
                }
              },
              message: "Username should contain no spaces and all letters must be lowercase",
            },
          ]}
          label="Username"
          placeholder={"Enter your username"}
          custom="mt-[17px]"
        />
        <div className="row mt-[17px] gap-x-[6.5%]">
          <AuthInput
            name={"password"}
            label="Password"
            placeholder={"6+ character"}
            password
            custom={"flex-1"}
          />
          <AuthInput
            name={"confirmPassword"}
            label="Confirm password"
            placeholder={"6+ character"}
            password
            custom={"flex-1"}
          />
        </div>
        <p className="text-16 md:text-14 text-grey-dark mt-7">
          By signing up, you agree to our{" "}
          <span className="text-black">Terms and Conditions</span> and{" "}
          <span className="text-black">Privacy Policy</span>
        </p>
        <div className="auth-btn-container mt-[6px]">
          <button onClick={handleVerifyEmail} className="auth-btn">
            Sign Up
          </button>
        </div>
      </Form>
      {/* Right Side */}
      <AuthWelcomeBoard
        backgroundImg={backgroundImg}
        title="Welcome to InStare!"
        subtitle="We invite you to join our community"
        btnTitle="Already have an account?"
        btnLabel="Sign in here"
        btnPath={"/signin"}
        btnWidth={120}
      />
    </>
  );
};

export default SignUp;
