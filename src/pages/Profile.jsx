import { useState } from "react";
import EditProfileModal from "~/components/profile/EditProfileModal";
import multipleIcon from "~/assets/multiple.svg";
import videoIcon from "~/assets/video.svg";
import tempImg from "~/assets/temp3.png";

const data = [
  {
    src: tempImg,
    multiple: true,
    video: false,
  },
  {
    src: tempImg,
    multiple: false,
    video: true,
  },
  {
    src: tempImg,
    multiple: false,
    video: false,
  },
  {
    src: tempImg,
    multiple: true,
    video: false,
  },
  {
    src: tempImg,
    multiple: false,
    video: false,
  },
  {
    src: tempImg,
    multiple: false,
    video: true,
  },
  {
    src: tempImg,
    multiple: false,
    video: false,
  },
  {
    src: tempImg,
    multiple: true,
    video: false,
  },
  {
    src: tempImg,
    multiple: false,
    video: false,
  },
  {
    src: tempImg,
    multiple: false,
    video: true,
  },
  {
    src: tempImg,
    multiple: false,
    video: false,
  },
  {
    src: tempImg,
    multiple: true,
    video: false,
  },
];

const Profile = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="pt-[50px] pb-[55px] px-[60px]">
      {/* User profile */}
      <div className="row gap-x-[31px]">
        {/* Avatar */}
        <div className="w-[200px] aspect-square rounded-full bg-grey"></div>
        <div className="flex-1 flex flex-col gap-y-30">
          {/* Name */}
          <div className="flex items-start justify-between font-ubuntu w-full">
            <div>
              <h1 className="font-bold text-[24px] leading-[27.5px]">
                Họ Và Tên
              </h1>
              <h2 className="text-16 mt-2">@username</h2>
            </div>
            <button
              onClick={() => setModal("edit")}
              className="p-[12px] border-1 border-black rounded-10 font-medium text-18"
            >
              Edit profile
            </button>
          </div>
          {/* Numbers */}
          <div className="profile-numbers">
            <p>
              <span>9</span> posts
            </p>
            <p>
              <span>99,9K</span> followers
            </p>
            <p>
              <span>9,999</span> following
            </p>
          </div>
          {/* Bio */}
          <p className="text-15 w-[94.5%]">
            This is a bio. This is a bio. This is a bio. This is a bio. This is
            a bio. This is a bio. This is a bio. This is a bio. This is a bio.
            This is a bio.{" "}
          </p>
        </div>
      </div>
      {/* Posts */}
      <div className="grid grid-cols-3 gap-[0.66%] mt-[60px]">
        {data.map((item, i) => (
          <div key={i} className="aspect-square relative cursor-pointer">
            <img
              src={item.src}
              alt="Post thumbnail"
              className="rounded-5 w-full h-full object-cover object-center bg-grey"
            />
            {item.multiple && (
              <img
                src={multipleIcon}
                alt="Multiple"
                className="absolute top-[10px] right-[10px]"
              />
            )}
            {item.video && (
              <img
                src={videoIcon}
                alt="Video"
                className="absolute top-[10px] right-[10px]"
              />
            )}
          </div>
        ))}
      </div>
      {/* Edit profile modal */}
      <EditProfileModal open={modal==='edit'} onCancel={()=>setModal(null)}/>
    </div>
  );
};

export default Profile;
