import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const SRSWebsocketContext = createContext();

const SRSWebsocketProvider = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [srsSocket, setSrsSocket] = useState(null);

  useEffect(() => {
    if (!currentUser?.token) return;
    setSrsSocket(
      io("http://localhost:3001", {
        extraHeaders: {
          Authorization: "Bearer " + currentUser?.token,
        },
      })
    );
  }, [currentUser?.token]);

  useEffect(() => {
    if (!srsSocket) return;
    srsSocket.on("connect", (_) => {
      console.log("Connected to SRS socket");
    });

    return () => {
      srsSocket.off("connect");
    };
  }, [srsSocket]);

  const emitSRS = (name, value) => {
    srsSocket?.emit(name, value);
  };

  return (
    <SRSWebsocketContext.Provider value={{ emitSRS, srsSocket }}>
      {children}
    </SRSWebsocketContext.Provider>
  );
};

export { SRSWebsocketProvider, SRSWebsocketContext };
