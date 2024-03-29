import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import Messages from "../components/Messages";
import InputEmoji from "react-input-emoji";
import useDataCall from "../hooks/useDataCall";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Chat = () => {
  const { _id } = useParams();
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const { createMessages, clearMessagesState } = useDataCall();
  const { chats } = useSelector((state) => state?.appData);
  const { contacts, userId } = useSelector((state) => state?.auth);
  const user = contacts?.filter((item) => item?._id == _id);
  const navigate = useNavigate();

  const backFunc = () => {
    navigate(-1);
    clearMessagesState();
  };


  const handleOnEnter = (text) => {
    const chatNumber = chats?.filter(
      (item) => item?.members?.includes(userId) && item?.members?.includes(_id)
    );

    if (info.chatId) {
      createMessages({ chatId: info.chatId, messageId: info?._id, text });
      setInfo("");
    } else {
      createMessages({ chatId: chatNumber[0]?._id, text: text });
    }
  };

  const style = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
  };

  return (
    <Box>
      <Box
        sx={{
          padding: "1rem 0.5rem",
          fontSize: "24px",
          fontWeight: "700",
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px ",
          backgroundColor: "#fdffff",
          mb: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2rem",
              cursor: "pointer",
            }}
            onClick={backFunc}
          >
            <MdArrowBackIos />
          </Box>

          <img src={user[0]?.image} alt="" style={style} />
          <Typography>
            {user[0]?.name?.charAt(0).toUpperCase() +
              user[0]?.name?.slice(1).toLowerCase()}
          </Typography>
        </Box>
      </Box>

      {/* Messages */}
      <Messages handleOnEnter={handleOnEnter} setInfo={setInfo} />

      {/* New Message */}
      <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        {info && (
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "0.4rem",
              padding: "0.4rem",
              borderLeft: "0.4rem solid #63a44d",
              m: "0rem 0.5rem",
              position: "relative",
            }}
          >
            <CancelOutlinedIcon
              sx={{
                position: "absolute",
                right: "0",
                color: "#336da0",
                height: "100%",
              }}
              onClick={() => setInfo("")}
            />

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontFamily: "halvetica",
                fontWeight: "900",
                color: "#63a44d",
              }}
            >
              {info?.sender?.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontFamily: "halvetica",
              }}
            >
              {info.text}
            </Typography>
          </Box>
        )}

        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </Box>
    </Box>
  );
};

export default Chat;
