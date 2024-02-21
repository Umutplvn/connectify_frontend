import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import usernone from "../assets/nouser.png";
import { useNavigate } from "react-router-dom";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import formatDateTime from "../helper/formatDateTime"; // Tarih ve saat biçimlendirme yardımcı işlevi

const Chats = () => {
  const { getChats } = useDataCall();
  useEffect(() => {
    getChats();
  }, []);

  const { chats } = useSelector((state) => state?.appData);
  const [display, setDisplay] = useState(chats);
  const [changed, setChanged] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setDisplay(chats);
  }, [chats]);

  const setSearch = (e) => {
    const filterName = chats?.filter((item) =>
      item?.toWho?.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplay(filterName);
  };


  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700" }}
      >
        Chats
      </Typography>

      {/* Search Box */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { p: "0 0.5rem", width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => {
            setSearch(e);
          }}
          id="outlined-password-input"
          type="search"
          size="small"
          autoComplete="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ alignSelf: "center" }}>
                <SearchOutlinedIcon
                  sx={{ display: changed ? "block" : "none" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Chats */}
      {display?.map((item) => (
        <Box
          onClick={() => navigate(`/chat/${item?._id}`)}
          sx={{
            display: "flex",
            p: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={item?.chatId}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid #e0e4eb",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            src={item?.toWho?.image ? item.toWho.image : usernone}
            alt="PP"
          />
          <Box
            sx={{
              width: "100%",
              p: "0.3rem",
              borderBottom: "0.5px solid #e0e4eb",
            }}
          >
            <Box
              display={"flex"}
              sx={{ mb: "0.5rem" }}
              justifyContent={"space-between"}
              
            >
              <Typography sx={{ minWidth: "75%", fontWeight:"700" }}>
                {item?.toWho?.name}
              </Typography>
              <ClearOutlinedIcon  />
            </Box>
            <Box sx={{ width: "100%", color:"#4b4e55" }}  display="flex"  justifyContent={"space-between"}>
              <Typography
                sx={{
                  maxWidth: "75%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Text Message
              </Typography>
              <Typography >
                {formatDateTime(item?.createdAt)} {/* Format date */}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Footer />
    </Box>
  );
};

export default Chats;
