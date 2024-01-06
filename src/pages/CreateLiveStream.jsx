import VideoSourceSelect from "~/components/live/create/VideoSourceSelect";
import ContentWrapper from "~/components/story/ContentWrapper";
import LeftBar from "~/components/story/LeftBar";
import MenuBar from "~/components/story/MenuBar";
import copyIcon from "~/assets/copy.svg";
import { useEffect, useState } from "react";
import liveRoomApis from "~/api/srs/liveRoom";
import { useSelector } from "react-redux";
import { Spin, message } from "antd";
import PreviewLiveStream from "~/components/live/create/PreviewLiveStream";
import srsApis from "~/api/srs/srs";
import getClientId from "~/utils/getClientId";
import { useNavigate } from "react-router-dom";

const CreateLiveStream = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState();
  const [isCreatingRoom, setIsCreatingRoom] = useState(true);
  const [videoSource, setVideoSource] = useState("obs");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const createLiveRoom = async () => {
      const { data } = await liveRoomApis.createLiveRoom(currentUser.token);
      setRoomData(data.liveRoom);
      setIsCreatingRoom(false);
    };

    if (currentUser) createLiveRoom();
  }, [currentUser]);

  const onPublish = async (clientId) => {
    setLoading(true);
    try {
      await srsApis.onPublish(currentUser.token, {
        liveRoomId: roomData?.id,
        clientId,
        name,
      });
      navigate(`/live/${currentUser.username}`);
    } catch {
      message.error("Some errors have occured");
    } finally {
    }
  };

  const onStartStreaming = async () => {
    const clientId = await getClientId(currentUser.token);
    await onPublish(clientId);
  };

  return (
    <>
      <LeftBar>
        <MenuBar
          primaryBtnLabel={"Start streaming"}
          secondaryBtnLabel={"Back"}
          primaryBtnLoading={loading}
          onPrimaryBtnClick={onStartStreaming}
        >
          <div className="create-text-menu px-5 h-full mt-[50px]">
            <textarea
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What is your livestream about?"
              className="create-textarea h-[20vh]"
            />
          </div>
        </MenuBar>
      </LeftBar>
      <ContentWrapper
        title={"Create livestream"}
        className={
          "font-ubuntu p-[5%] create-livestream items-stretch justify-between"
        }
      >
        {/* Video source select */}
        <VideoSourceSelect value={videoSource} onChange={setVideoSource} />
        {/* Stream key */}
        <div className="row gap-x-5">
          <h2>Stream key:</h2>
          <div className="flex-1 relative">
            <input
              readOnly
              disabled
              value={roomData?.id}
              className="w-full bg-story h-16 rounded-10 p-4 text-20 cursor-text"
            />
            {!isCreatingRoom && (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(roomData?.id);
                  message.success("Copied to clipboard!");
                }}
                className="absolute top-1/2 -translate-y-1/2 right-3 rounded-5 hover:bg-black15 p-2"
              >
                <img src={copyIcon} alt="Copy to clipboard" />
              </button>
            )}
            {isCreatingRoom && (
              <Spin className="absolute top-1/2 -translate-y-1/2 left-5" />
            )}
          </div>
        </div>
        {/* Preview */}
        <PreviewLiveStream
          streamUrl={roomData?.flvUrl}
          pushUrl={roomData?.pushUrl}
          videoSource={videoSource}
        />
      </ContentWrapper>
    </>
  );
};

export default CreateLiveStream;
