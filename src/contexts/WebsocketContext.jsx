import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const WebsocketContext = createContext();

const WebsocketProvider = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!currentUser?.token) return;
    console.log("set socket");
    setSocket(
      io("http://localhost:2041", {
        extraHeaders: {
          Authorization: "Bearer " + currentUser?.token,
        },
      })
    );
  }, [currentUser?.token]);

  useEffect(() => {
    if (!socket) return;
    socket.on("connect", (_) => {
      console.log("Connected");
    });

    return () => {
      socket.off("connect");
    };
  }, [socket]);

  const emit = (name, value) => {
    socket?.emit(name, value);
  };

  return (
    <WebsocketContext.Provider value={{ newMessage, emit, socket }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export { WebsocketProvider, WebsocketContext };
