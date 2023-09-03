import React from "react";
import Button from "@mui/material/Button";
import { RoomContext } from "../context/RoomContext";
import { useContext} from "react";
const JoinButton: React.FC = () => {

    const { ws } = useContext(RoomContext)
    const joinRoom = () =>{
        if (ws) {
            ws.emit("Join-room");
          }
    }
  return (
     
      <Button
      onClick={joinRoom}
        sx={{
          alignItems: "center",
          background: "Red",
          backgroundColor: "black",
          marginLeft: "200px",
        }}
      >
        Start new Meeting
      </Button>
    
  );
};

export default JoinButton;
