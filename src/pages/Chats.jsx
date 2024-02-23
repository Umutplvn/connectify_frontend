import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import usernone from "../assets/nouser.png";
import { useNavigate } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import formatDateTime from "../helper/formatDateTime"; 
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useAuthCall from "../hooks/useAuthCall";

const Chats = () => {
  const { getChats, deleteChat } = useDataCall();
  const {getMyContacts}=useAuthCall()

  useEffect(() => {
    getChats();
    getMyContacts()
  }, []);

  const { chats } = useSelector((state) => state?.appData);
  const [display, setDisplay] = useState(chats);
  const [changed, setChanged] = useState(true);
  const [swipe, setSwipe] = useState();
  const navigate = useNavigate();

console.log(chats);

  useEffect(() => {
    const data = chats.filter((item) => item?.show == true);
    setDisplay(data);
  }, [chats]);

  const setSearch = (e) => {
    const filterName = chats
      .filter((item) => item?.show == true)
      ?.filter((item) =>
        item?.toWho?.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    setDisplay(filterName);
  };
console.log(display);
  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700", backgroundColor:"#f8fcfb" }}
      >
        Chats
      </Typography>

      {/* Search Box */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { p: "0 0.5rem", width: "100%" },
          mt:"0.5rem"

        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => {
            setSearch(e);
          }}
          placeholder="Search"
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
            src={item?.toWho?.image ? item?.toWho?.image : usernone}
            alt="PP"
          />
          <Box
            sx={{
              width: "100%",
              p: "0.3rem",
              borderBottom: "0.5px solid #e0e4eb",
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                onClick={() => navigate(`/chat/${item?._id}`)}
                sx={{ minWidth: "95%", fontWeight: "700" }}
              >
                {item?.toWho?.name.charAt(0).toUpperCase() +
                  item?.toWho?.name.slice(1).toLowerCase()}

              </Typography>
              <Box
                sx={{
                  display: "flex",
                  position: "absolute",
                  width: "7rem",
                  height: "3.3rem",
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomLeftRadius: "0.5rem",
                  borderTopLeftRadius: "0.5rem",
                  backgroundColor: "red",
                  right: swipe === item._id ? "0rem" : "-7rem",
                  transition: "1s",
                }}
              >
                <Box
                  sx={{
                    borderBottomLeftRadius: "0.5rem",
                    borderTopLeftRadius: "0.5rem",
                    width: "55%",
                    height: "101%",
                    backgroundColor: "#ED5E68",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DeleteIcon
                    cursor="pointer"
                    onClick={() => deleteChat(item._id)}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                    height: "101%",
                    fontWeight: "700",
                    backgroundColor: "#3DC864",
                    cursor: "pointer",
                  }}
                >
                  <ClearOutlinedIcon onClick={() => setSwipe("-7rem")} />
                </Box>
              </Box>
              <MoreHorizIcon
                onClick={(e) => setSwipe(item._id)}
                sx={{ cursor: "pointer" }}
              />
            </Box>

            <Box>
              <Box
                sx={{ width: "100%", color: "#4b4e55" }}
                display="flex"
                justifyContent={"space-between"}
              >
                <Typography
                  onClick={() => navigate(`/chat/${item?._id}`)}
                  sx={{
                    width: "75%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/*!!!!! Must be filled with real data !!!! */}
                  Text Message
                </Typography>
                <Typography
                  width={"25%"}
                  textAlign={"end"}
                  onClick={() => navigate(`/chat/${item?._id}`)}
                >
                  {formatDateTime(item?.createdAt)} {/* Format date */}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Footer />
    </Box>
  );
};

export default Chats;
