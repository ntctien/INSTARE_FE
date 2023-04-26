import AuthInput from "../auth/AuthInput";
import CloseModal from "./CloseModal";

const ChangePasswordModal = ({ open, onCancel }) => {
  return (
    <CloseModal open={open} onCancel={onCancel} title={"Change password"}>
      <div className="w-[480px] px-[20px] py-[25px]">
        <div className="mx-[10px]">
          <AuthInput password label={'Old password'} placeholder={'Enter your password'}/>
          <AuthInput password label={'New password'} placeholder={'6+ character'} custom={'mt-5'}/>
          <AuthInput password label={'New password'} placeholder={'6+ character'} custom={'mt-5'}/>
        </div>
        <button className="primary-btn mt-[34px]">CONFIRM CHANGE</button>
      </div>
    </CloseModal>
  );
};

export default ChangePasswordModal;
