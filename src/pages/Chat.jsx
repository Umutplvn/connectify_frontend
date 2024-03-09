import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useDataCall from "../hooks/useDataCall";
import { MdArrowBackIos } from "react-icons/md";

const Chat = ({secondId}) => {

  const {getMessages, findChat}=useDataCall()
  const {_id}=useParams()
  const {contacts, userId} =useSelector((state)=>state.auth)
  // const { chats } = useSelector((state) => state?.appData);
  const user= contacts.filter((contact)=>contact?._id==_id)
  const navigate=useNavigate()
  
  useEffect(() => {
    getMessages(secondId);
  // findChat(_id)
  }, [])

  
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
       <Box sx={{display:"flex", alignItems:"center", gap:1}}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"2rem", cursor:"pointer"}} onClick={()=>navigate("/chats")}>
        <MdArrowBackIos /> 
        </Box>
        <img src={user[0]?.image} alt="" style={style} />
        <Typography>{user[0]?.name?.charAt(0).toUpperCase()+ user[0]?.name?.slice(1).toLowerCase()}</Typography>
        </Box> 
      </Box>

{/* Messages */}


    </Box>
  );
};

export default Chat;
