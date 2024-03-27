import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useDataCall from "../hooks/useDataCall";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import AccountMenu from "./MessagesMoreMenu";

const Messages = () => {
  const { _id } = useParams();
  const { getMessages } = useDataCall();
  const { messages, chats } = useSelector((state) => state?.appData);
  const { userId } = useSelector((state) => state?.auth);

  useEffect(() => {
    const chatNumber = chats?.filter(
      (item) => item?.members?.includes(userId) && item?.members?.includes(_id)
    );
    getMessages(chatNumber[0]?._id);
  }, []);


  return (
    <Box sx={{ maxHeight: "75vh", overflow: "scroll" }}>
      {messages?.map((item, index) => (
        <Box key={index} style={{ width: "100%", margin: "0.3rem auto" }}>
          <MessageBox
            position={(item.sender?._id === userId || item.sender=="") ? "right" : "left"}
            type={"text"}
            styles={
              item.sender?._id === userId || item.sender==""
                ? {
                    background: "linear-gradient(to top right, #b6dadd, #fff",
                    maxWidth: "80%",
                  }
                : {
                    background:
                      "linear-gradient(to top left, #cde4c7, #ffffff)",
                    maxWidth: "80%",
                  }
            }
            text={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    marginBottom: "0.1rem",
                  }}
                >
                  <AccountMenu item={item} />
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    lineHeight: "1",
                    marginBottom: "-0.5rem",
                    fontStyle: item.sender === "" ? "italic" : "normal", 
                    color: item?.sender === "" ? "#7b7b7b" : "black", // item.sender boş ise italik yap
                  }}
                >
                  {item.text}
                </Typography>
                {item?.reaction && (
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: "-2.5rem",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      width: "1.5rem",
                      height: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    {item?.reaction}
                  </Typography>
                )}
              </Box>
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
