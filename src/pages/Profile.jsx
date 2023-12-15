import { useContext, useEffect, useState } from "react";
import EditProfileModal from "~/components/profile/EditProfileModal";
import PostThumbnail from "~/components/profile/PostThumbnail";
import { useParams } from "react-router-dom";
import viewUserProfile from "~/api/services/no-auth/viewUserProfile";
import UserProfileInfo from "~/components/profile/UserProfileInfo";
import { SplashContext } from "~/contexts/SpashContext";
import { useSelector } from "react-redux";
import Page404 from "./Page404";

const Profile = () => {
  const { username } = useParams();
  const { setSplash } = useContext(SplashContext);
  const { currentUser } = useSelector((state) => state.user);
  const [modal, setModal] = useState(null);
  const [data, setData] = useState();
  const [isBanned, setIsBanned] = useState(false);

  const handleViewUserProfile = async () => {
    await viewUserProfile(username)
      .then(({ data }) => setData(data))
      .catch((err) => {
        setIsBanned(true);
        setSplash(false);
      });
  };

  useEffect(() => {
    if (currentUser) {
      setSplash(true);
      handleViewUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, currentUser]);

  return (
    <div className="pt-[50px] pb-[55px] px-[60px]">
      {!isBanned ? (
        <>
          {/* User profile */}
          <UserProfileInfo
            data={data}
            setModal={setModal}
            setSplash={setSplash}
            fetchProfile={handleViewUserProfile}
          />
          {/* Posts */}
          <div className="grid grid-cols-3 gap-[0.66%] mt-[60px]">
            {data?.posts.toReversed().map((item, i) => (
              <PostThumbnail key={i} item={item} />
            ))}
          </div>
          {/* Edit profile modal */}
          {modal === "edit" && (
            <EditProfileModal
              open={modal === "edit"}
              onCancel={() => setModal(null)}
              setModal={setModal}
              fetchProfile={handleViewUserProfile}
            />
          )}
        </>
      ) : (
        <Page404 />
      )}
    </div>
  );
};

export default Profile;
