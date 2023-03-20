import AuthWelcomeBoard from "../components/auth/AuthWelcomeBoard";
import AuthInput from "../components/auth/AuthInput";
import backgroundImg from "../assets/signup-bg.png";

const SignUp = () => {
  return (
    <>
      {/* Left Side */}
      <div className="pl-[69px] pr-[111px] col-center">
        <h1 className="auth-title">Create an account</h1>
        <AuthInput
          label="Email"
          placeholder={"example@email.com"}
          custom="mt-[27px]"
        />
        <AuthInput
          label="Username"
          placeholder={"Enter your username"}
          custom="mt-[17px]"
        />
        <div className="row mt-[17px] gap-x-[30px]">
          <AuthInput label="Password" placeholder={"6+ character"} password />
          <AuthInput
            label="Confirm password"
            placeholder={"6+ character"}
            password
          />
        </div>
        <p className="text-16 text-grey-dark mt-7">
          By signing up, you agree to our{" "}
          <span className="text-black">Terms and Conditions</span> and{" "}
          <span className="text-black">Privacy Policy</span>
        </p>
        <div className="auth-btn-container mt-[6px]">
          <button className="auth-btn">Sign Up</button>
        </div>
      </div>
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
