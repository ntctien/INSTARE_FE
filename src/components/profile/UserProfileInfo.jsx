import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, Row, Spin, Tooltip } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import checkIfUserFollowed from "~/api/services/interact/checkIfUserFollowed";
import followUser from "~/api/services/interact/followUser";
import unfollowUser from "~/api/services/interact/unfollowUser";
import Avatar from "../home/Avatar";
import optionIcon from "~/assets/option.svg";
import ReportModal from "../modal/ReportModal";

const UserProfileInfo = ({ data, setModal, setSplash, fetchProfile }) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [self, setSelf] = useState(false);
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reporting, setReporting] = useState(false);

  const handleCheckIfUserFollowed = async (token, id) => {
    await checkIfUserFollowed(token, id)
      .then(({ data }) => setFollowing(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const checkUser = async () => {
      if (data) {
        if (currentUser) {
          if (data.username === currentUser.username) {
            setSelf(true);
          } else {
            await handleCheckIfUserFollowed(currentUser.token, data.id);
          }
        }
      }
      setSplash(false);
    };
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentUser]);

  const handleFollowUser = async () => {
    setLoading(true);
    await followUser(currentUser.token, data.id)
      .then(() => {
        setFollowing(true);
        fetchProfile();
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const handleUnfollowUser = async () => {
    setLoading(true);
    await unfollowUser(currentUser.token, data.id)
      .then(() => {
        setFollowing(false);
        fetchProfile();
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const onOptionClick = ({ key }) => {
    switch (key) {
      case "report":
        setReporting(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="row gap-x-[31px]">
        {/* Avatar */}
        <Avatar ava={data?.ava} width={"200px"} />
        <div className="flex-1 flex flex-col gap-y-30">
          {/* Name */}
          <div className="row justify-between font-ubuntu w-full">
            <div>
              {data?.name && (
                <h1 className="font-bold text-[24px] leading-[27.5px] mb-2">
                  {data.name}
                </h1>
              )}
              <h2 className={`text-16 ${!data?.name && "font-bold"}`}>
                @{data?.username}
              </h2>
            </div>
            {!self ? (
              <Row>
                {following ? (
                  <div className="flex gap-x-[5px]">
                    <button
                      onClick={() => navigate(`/message/${data.id}`)}
                      className="profile-btn hover:bg-pastel-purple-dark hover:text-white hover:border-none"
                    >
                      Message
                    </button>
                    <Tooltip
                      placement="bottom"
                      title={<p className="text-red">Unfollow</p>}
                      color="#0000000D"
                    >
                      <button
                        onClick={handleUnfollowUser}
                        className="profile-btn hover:border-red hover:text-red"
                      >
                        {!loading ? (
                          <p>Following</p>
                        ) : (
                          <Spin
                            indicator={
                              <LoadingOutlined
                                style={{ fontSize: 24, color: "#F24E1E" }}
                                spin
                              />
                            }
                          />
                        )}
                      </button>
                    </Tooltip>
                  </div>
                ) : (
                  <button
                    onClick={handleFollowUser}
                    className="w-[120px] h-[45px] bg-blue rounded-10 font-ubuntu font-medium text-18 text-white hover:brightness-105"
                  >
                    {!loading ? <p>Follow</p> : <Spin size="small" />}
                  </button>
                )}
                <Dropdown
                  placement="topCenter"
                  arrow
                  trigger={["click"]}
                  menu={{
                    items: [
                      {
                        key: "report",
                        label: <p className="px-2">Report user</p>,
                        danger: true,
                      },
                    ],
                    onClick: onOptionClick,
                  }}
                >
                  <button className="hover:brightness-125">
                    <img src={optionIcon} alt="Option" />
                  </button>
                </Dropdown>
              </Row>
            ) : (
              <button
                onClick={() => setModal("edit")}
                className="profile-btn hover:border-pastel-purple-dark"
              >
                Edit profile
              </button>
            )}
          </div>
          {/* Numbers */}
          <div className="profile-numbers">
            <p>
              <span>{data?._count.posts}</span> posts
            </p>
            <p>
              <span>{data?._count.follower}</span> followers
            </p>
            <p>
              <span>{data?._count.following}</span> following
            </p>
          </div>
          {/* Bio */}
          <p className="text-15 w-[94.5%]">{data?.bio}</p>
        </div>
      </div>
      <ReportModal
        userId={data?.id}
        open={reporting}
        onCancel={() => setReporting(false)}
      />
    </>
  );
};

export default UserProfileInfo;
