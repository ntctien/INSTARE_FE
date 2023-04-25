import React from "react";
import CloseModal from "../modal/CloseModal";
import CountingTextArea from "../CountingTextArea";

const EditProfileModal = ({ open, onCancel }) => {
  return (
    <CloseModal title={"Edit profile"} open={open} onCancel={onCancel}>
      <div className="w-[480px] px-[20px] py-[17px]">
        <div className="px-[20px]">
          {/* Profile photo */}
          <div className="row gap-x-30">
            <div className="w-[150px] aspect-square bg-grey rounded-full"></div>
            <div className="flex flex-col gap-y-[15px]">
              <button className="edit-profile-btn bg-blue text-white">
                Change profile photo
              </button>
              <button className="edit-profile-btn border-1 border-red text-red">
                Remove profile photo
              </button>
            </div>
          </div>
          {/* Inputs */}
          <div className="edit-profile-input">
            <h3>Username</h3>
            <input />
            <p>
              In most cases, you'll be able to change your username back to
              _username for another 14 days.
            </p>
          </div>
          <div className="edit-profile-input">
            <h3>Full Name</h3>
            <input />
          </div>
          <div className="edit-profile-input">
            <h3>Bio</h3>
            <CountingTextArea maxLength={150} />
          </div>
        </div>
        {/* Save button */}
        <button className="primary-btn mt-[12px]">SAVE</button>
      </div>
    </CloseModal>
  );
};

export default EditProfileModal;
