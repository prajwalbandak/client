import React, { createContext, ReactNode, useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const WS = "http://localhost:8080";

export const RoomContext = createContext<null | any>(null);

interface Props {
  children: ReactNode;
}

export const RoomProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [ws, setWs] = useState<any | null>(null);

  useEffect(() => {
    const socket = socketIOClient(WS);
    setWs(socket);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <RoomContext.Provider value={{ ws }}>
      {children}
    </RoomContext.Provider>
  );
};
