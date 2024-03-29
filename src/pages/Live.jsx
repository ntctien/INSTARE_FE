import { message } from "antd";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBeforeUnload, useNavigate, useParams } from "react-router-dom";
import srsApis from "~/api/srs/srs";
import NavigateButton from "~/components/buttons/NavigateButton";
import PostContainer from "~/components/home/post/PostContainer";
import PostDetail from "~/components/home/post/PostDetail";
import EndLiveButton from "~/components/live/EndLiveButton";
import StreamVideo from "~/components/live/StreamVideo";
import WarningModal from "~/components/modal/WarningModal";
import { SRSWebsocketContext } from "~/contexts/SRSWebsocketContext";
import useComment from "~/hooks/useComment";
import useFlyingReactions from "~/hooks/useFlyingReactions";
import getClientId from "~/utils/getClientId";
import { viewIcon } from "~/assets/live_icons";
import useTimeCounter from "~/hooks/useTimeCounter";
import Redirect from "~/components/live/Redirect";

const Live = () => {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { srsSocket, emitSRS } = useContext(SRSWebsocketContext);
  const [roomData, setRoomData] = useState();
  const [modal, setModal] = useState();
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [viewCount, setViewCount] = useState();
  const [liveEnded, setLiveEnded] = useState(false);
  const [userJoin, setUserJoin] = useState();
  const { reacts, containerRef, FlyingReaction, startAnimation } =
    useFlyingReactions();
  const { time } = useTimeCounter(roomData?.updatedAt);

  useEffect(() => {
    const getRoom = async () => {
      if (!username || !currentUser) return;
      const { data } = await srsApis.getLiveRoomByUsername(
        currentUser.token,
        username
      );
      setRoomData(data);
    };

    getRoom();
  }, [username, currentUser]);

  useEffect(() => {
    const joinLive = async () => {
      if (!roomData || !currentUser) return;
      const clientId = await getClientId(currentUser.token);
      srsApis.onPlay(currentUser.token, { liveRoomId: roomData.id, clientId });
    };

    joinLive();
  }, [roomData, currentUser]);

  useEffect(() => {
    if (!srsSocket || !roomData) return;

    srsSocket.on("userConnected", (data) => {
      if (data.roomId === roomData.id) {
        setViewCount(data.viewers);
        setUserJoin(data.username);
      }
    });

    srsSocket.on("userDisconnected", (data) => {
      if (data.roomId === roomData.id) {
        setViewCount(data.viewers);
      }
    });

    srsSocket.on("onReact", (data) => {
      if (data.roomId === roomData.id) {
        startAnimation(data.react);
      }
    });

    srsSocket.on("onComment", (data) => {
      if (data.roomId === roomData.id) {
        setComments((prev) => [
          ...prev,
          {
            comment: data.comment,
            user: {
              ava: data.ava,
              id: data.userId,
              username: data.username,
            },
          },
        ]);
      }
    });

    srsSocket.on("liveEnd", (data) => {
      if (data.roomId === roomData.id) {
        setLiveEnded(true);
      }
    });

    return () => {
      srsSocket.off("onReact");
      srsSocket.off("onComment");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srsSocket, roomData]);

  useBeforeUnload(() => {
    leaveLive();
  });

  useEffect(() => {
    if (!roomData) return;

    return () => {
      leaveLive();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomData]);

  const leaveLive = async () => {
    if (!roomData || !currentUser) return;
    await srsApis.onStop(currentUser.token, { liveRoomId: roomData.id });
  };

  const handleEndLive = async () => {
    setLoading(true);
    try {
      await srsApis.onUnpublish(currentUser.token, {
        liveRoomId: roomData?.id,
      });
      navigate("/");
      message.success("Live has ended.");
    } catch {
      message.error("There occurs some errors");
    } finally {
      setLoading(false);
      setModal(null);
    }
  };

  const comment = async (commentValue) => {
    await emitSRS("comment", {
      roomId: roomData?.id,
      comment: commentValue,
    });
  };

  const { commentInputProps, handleComment } = useComment(comment);

  const react = async (reaction) => {
    await emitSRS("like", {
      roomId: roomData?.id,
      react: reaction,
    });
  };

  return (
    <PostContainer>
      {/* Stream */}
      <div ref={containerRef} className="w-[66vw] bg-blue-dark center relative">
        <StreamVideo
          streamUrl={roomData?.flvUrl}
          className={"w-full h-full object-contain"}
        />
        {username === currentUser?.username && (
          <EndLiveButton onClick={() => setModal("end")} />
        )}
        <NavigateButton
          path={"/"}
          suffix={
            <>
              <div className="live-tag ml-3">LIVE {time}</div>
              <div className="row gap-x-1 bg-[#00000033] rounded-5 p-1 ml-[10px]">
                <img src={viewIcon} alt="Views" />
                <p className="font-medium text-white text-16">
                  {viewCount || 0}
                </p>
              </div>
            </>
          }
        />
        <WarningModal
          title={"Do you want to end live?"}
          subtitle={"The record won’t be save"}
          primaryBtnLabel={"Confirm"}
          open={modal === "end"}
          loading={loading}
          onCancel={() => setModal(null)}
          onPrimaryBtnClick={handleEndLive}
        />
        {reacts?.map((react) => (
          <FlyingReaction key={react.id} reaction={react} />
        ))}
      </div>
      {/* Detail */}
      <PostDetail
        postHeaderData={{
          user: {
            username,
            ava: roomData?.user.ava,
          },
        }}
        interactBarProps={{
          onReact: (reaction) => react(reaction),
        }}
        caption={roomData?.name}
        comments={comments}
        commentInputProps={commentInputProps}
        commentsPrefix={
          userJoin && (
            <div
              style={{
                background:
                  "linear-gradient(91.17deg, #96CAF726 0%, #BFB2F326 100%)",
              }}
              className="p-5 mb-[17px]"
            >
              User <span className="font-bold">@{userJoin}</span> has joined the
              live
            </div>
          )
        }
        commentAutoScrollBottom
        handleComment={handleComment}
      />
      {liveEnded && <Redirect />}
    </PostContainer>
  );
};

export default Live;
