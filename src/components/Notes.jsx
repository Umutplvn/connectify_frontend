import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usernone from "../assets/nouser.png";
import "../styles/bubblestyle.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BasicModal from "./addNoteModal";
import CancelIcon from '@mui/icons-material/Cancel';
import useAuthCall from "../hooks/useAuthCall";


const Notes = () => {

  const { contacts, image, note, name } = useSelector((state) => state?.auth);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {update}=useAuthCall()

const cancelStyle={
  color:"#d32828",
  position:"absolute",
  zIndex:2,
  top:-10,
  right:-14,
  cursor:"pointer"
}



return (
    <>

      <Box
        sx={{
          boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;",
          height: "8rem",
          borderRadius: "0.5rem",
          m: "0.5rem 0.5rem",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
       {note ?  <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.1rem",
            pl: "0.5rem",
            mt: "0.5rem",
            width: "7rem",
            height: "8rem",
          }}
        >
          <i class="speech-bubble" data-arrow="bottom-center">
                {note}
                <CancelIcon sx={cancelStyle} onClick={()=>update({note:""})} className="delete-icon"/>
              </i>
          <img
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid #e0e4eb",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            src={image ? image : usernone}
            alt="PP"
          />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              color: "#716868",
            }}
          >
            {name}
          </Typography>
        </Box>:  
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.1rem",
            pl: "0.5rem",
            mt: "1.5rem",
            width: "7rem",
            height: "8rem",
          }}
        >
          <AddCircleIcon onClick={()=>setOpen(true)} className="addBtn"/>
          <img
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid #e0e4eb",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            src={image ? image : usernone}
            alt="PP"
          />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              color: "#716868",
            }}
          >
            Leave a note...
          </Typography>
        </Box>}

        {contacts
          ?.filter((item) => item?.note?.length > 0)
          .map((item) => (
            
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.1rem",
                pl: "0.5rem",
                mt: "0.5rem",
                width: "7rem",
                height: "8rem",
              }}
            >
              <i class="speech-bubble" data-arrow="bottom-center">
                {item?.note}
              </i>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #e0e4eb",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
                src={item?.image}
                alt="PP"
              />
              <Typography
                sx={{
                  width: "40px",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#716868",
                }}
              >
                {item?.name}
              </Typography>
            </Box>
          ))}
      </Box>
      <BasicModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} />

    </>
  );
};

export default Notes;
