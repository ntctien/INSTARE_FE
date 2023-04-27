import React, { useState } from "react";
import CloseModal from "../modal/CloseModal";
import CountingTextArea from "../CountingTextArea";
import ChangePhotoModal from "./ChangePhotoModal";

const EditProfileModal = ({ open, onCancel }) => {
  const [modal, setModal] = useState(null);
  return (
    <>
      <CloseModal
        title={"Edit profile"}
        open={open && modal !== "change-photo"}
        onCancel={onCancel}
      >
        <div className="w-[480px] px-[20px] py-[17px]">
          <div className="px-[20px]">
            {/* Profile photo */}
            <div className="row gap-x-30">
              <div className="w-[150px] aspect-square bg-grey rounded-full"></div>
              <div className="flex flex-col gap-y-[15px]">
                <button
                  onClick={() => setModal("change-photo")}
                  className="edit-profile-btn bg-blue hover:brightness-105 text-white"
                >
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
      <ChangePhotoModal
        open={modal === "change-photo"}
        onCancel={() => setModal(null)}
      />
    </>
  );
};

export default EditProfileModal;
