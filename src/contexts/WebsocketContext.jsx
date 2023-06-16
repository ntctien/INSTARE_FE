import { createContext } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const WebsocketContext = createContext();

const WebsocketProvider = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);

  const socket = io("http://localhost:2041", {
    extraHeaders: {
      Authorization: "Bearer " + currentUser?.token,
    },
  });

  return (
    <WebsocketContext.Provider value={socket}>
      {children}
    </WebsocketContext.Provider>
  );
};

export { WebsocketProvider, WebsocketContext };
