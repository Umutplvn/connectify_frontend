import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useDataCall from "../hooks/useDataCall";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const Messages = () => {
  const {_id}=useParams()
  const { getMessages } = useDataCall();
  const { messages, chats } = useSelector((state) => state?.appData);
  const { userId } = useSelector((state) => state?.auth);
  
  useEffect(() => {
    const chatNumber = chats?.filter(item => item?.members?.includes(userId) && item?.members?.includes(_id));
    getMessages(chatNumber[0]?._id); 
  }, [])



  return (
    <Box sx={{ maxHeight:"75vh", overflow:"scroll"}}>
      {messages?.map((item, index) => (
        <Box key={index} style={{ width: "100%", margin: "0.5rem auto" }}>
          <MessageBox
            position={item.sender?._id === userId ? "right" : "left"}
            type={"text"}
                styles={item.sender?._id === userId ? 
               {background: "linear-gradient(to top right, #b6dadd, #fff", maxWidth:"80%"} : 
               { background: "linear-gradient(to top left, #cde4c7, #ffffff)", maxWidth:"80%"}
            }
            text={
              <Typography sx={{fontSize:"1rem"}}>
                {item.text}
              </Typography>
            }
            date={item?.createdAt}
            data={{
              status: {
                click: false,
                loading: 0,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
