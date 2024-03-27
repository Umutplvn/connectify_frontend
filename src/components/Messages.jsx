import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useDataCall from "../hooks/useDataCall";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import AccountMenu from "./MessagesMoreMenu";

const Messages = ({setInfo}) => {
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
        <Box key={index} style={{ width: "100%", margin: "0.1rem auto", position:"relative" }}>
         
         
          {item?.replyto ? (
            <MessageBox
              position={"right"}
              type={"text"}
              text={
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <AccountMenu item={item} setInfo={setInfo} />
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "0.4rem",
                      padding: "0.4rem",
                      borderLeft:"0.4rem solid #63a44d"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "halvetica",
                        fontWeight: "900",
                        color: "#63a44d",

                      }}
                    >
                      {item.replyto?.sender?.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "halvetica",
                      }}
                    >
                      {item?.replyto?.text}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "halvetica",
                      mt: "0.3rem",
                      mb:"-1rem"
                    }}
                  >
                    {item?.text}
                  </Typography>
                  
                   {item.reaction&&
                    <Typography
                    sx={{
                      position: "absolute",
                      bottom: "-0.7rem",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      width: "1.5rem",
                      height: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                      fontSize: "0.8rem",
                      border:"0.5px solid #edebeb"
                    }}
                  >
                    {item?.reaction}
                  </Typography>}


                </Box>
              }
              date={item?.createdAt}
              styles={{
                background: "linear-gradient(to top right, #D9FDD3, #fff",
                maxWidth: "80%",
              }}
            />
          ) 
          
          
          
          : (
            <MessageBox
              position={
                item.sender?._id === userId || item.sender == ""
                  ? "right"
                  : "left"
              }
              type={"text"}
              styles={
                item.sender?._id === userId || item.sender == ""
                  ? {
                      background: "linear-gradient(to top right, #D9FDD3, #fff",
                      maxWidth: "80%",
                    }
                  : {
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
                    }}
                  >
                    <AccountMenu item={item} setInfo={setInfo} />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "halvetica",
                      lineHeight: "1",
                      marginBottom: "-0.6rem",
                      fontStyle: item.sender === "" ? "italic" : "normal",
                      color: item?.sender === "" ? "#7b7b7b" : "black", // item.sender boş ise italik yap
                    }}
                  >
                    {item?.text}
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
                        alignItems: "end",
                        fontSize: "0.8rem",
                        border:"0.5px solid #edebeb"
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
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
