import { useContext, useEffect, useState } from "react";
import EditProfileModal from "~/components/profile/EditProfileModal";
import tempImg from "~/assets/temp3.png";
import PostThumbnail from "~/components/profile/PostThumbnail";
import { useParams } from "react-router-dom";
import viewUserProfile from "~/api/services/no-auth/viewUserProfile";
import UserProfileInfo from "~/components/profile/UserProfileInfo";
import { SplashContext } from "~/contexts/SpashContext";
import { useSelector } from "react-redux";

const posts = [
  {
    id: 0,
    thumbnail: tempImg,
    multiple: true,
    containVideo: false,
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
  const { username } = useParams();
  const { setSplash } = useContext(SplashContext);
  const { currentUser } = useSelector((state) => state.user);
  const [modal, setModal] = useState(null);
  const [data, setData] = useState();

  const handleViewUserProfile = async (username) => {
    await viewUserProfile(username)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (currentUser) {
      setSplash(true);
      handleViewUserProfile(username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, currentUser]);

  return (
    <div className="pt-[50px] pb-[55px] px-[60px]">
      {/* User profile */}
      <UserProfileInfo data={data} setModal={setModal} setSplash={setSplash} />
      {/* Posts */}
      <div className="grid grid-cols-3 gap-[0.66%] mt-[60px]">
        {data?.posts.map((item, i) => (
          <PostThumbnail key={i} item={item} />
        ))}
      </div>
      {/* Edit profile modal */}
      {modal === "edit" && (
        <EditProfileModal
          open={modal === "edit"}
          onCancel={() => setModal(null)}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Profile;
