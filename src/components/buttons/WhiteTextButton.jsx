import DefaultButton from "./DefaultButton";

const WhiteTextButton = ({ children, loading, ...rest }) => {
  return (
    <DefaultButton loading={loading} className="text-white" {...rest}>
      {children}
    </DefaultButton>
  );
};

export default WhiteTextButton;
