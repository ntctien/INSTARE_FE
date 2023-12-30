import { Button, Upload } from "antd";
import { useSelector } from "react-redux";
import chatMedia from "~/api/services/chat/chatMedia";
import { mediaIcon } from "~/assets/message_icons";

const SendMediaButton = ({
  userId,
  messages,
  setMessages,
  setSendingQueue,
}) => {
  const { currentUser } = useSelector((state) => state.user);

  const getFileUrl = (file) => {
    const url = URL.createObjectURL(file);
    setMessages((prev) => [
      ...prev,
      {
        createdAt: Date(),
        message: url,
        senderId: currentUser.id,
      },
    ]);

    return () => URL.revokeObjectURL(url);
  };

  const sendMessage = async (file) => {
    const nextIndex = messages.length;
    setSendingQueue((prev) => [...prev, nextIndex]);
    await chatMedia(currentUser.token, userId, file);
    setSendingQueue((prev) => prev.filter((index) => index !== nextIndex));
  };

  const handleChange = ({ file }) => {
    getFileUrl(file);
    sendMessage(file);
  };

  return (
    <Upload
      accept="image/*"
      showUploadList={false}
      action={null}
      beforeUpload={() => false}
      className="send-media-btn"
      onChange={handleChange}
    >
      <Button className="hover:brightness-110 p-0">
        <img src={mediaIcon} alt="Send media" className="h-full" />
      </Button>
    </Upload>
  );
};

export default SendMediaButton;
