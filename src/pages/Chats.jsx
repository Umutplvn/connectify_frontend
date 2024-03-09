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

const Chats = ({setSecondId}) => {
  const { getChats, deleteChat, getNotes, getStories } = useDataCall();
  const { getMyContacts } = useAuthCall();
  const { chats } = useSelector((state) => state?.appData);
  const { contacts,userId } = useSelector((state) => state?.auth);
  const [display, setDisplay] = useState([]);
  const [changed, setChanged] = useState(true);
  const [swipe, setSwipe] = useState();
  const [online, setOnline] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getChats();
    getMyContacts();
    // getNotes();
    // getStories();

    const chatData = chats?.filter(item => item?.show === true)?.map(item => item?.members);
    const arr = [];
    const concatted = arr?.concat(...chatData);
    const chatRender = concatted?.filter(item => item !== userId);
    const result = chatRender?.map(id => {
        const foundContact = contacts?.find(contact => contact?._id === id);
        return foundContact ? foundContact : null;
    });

    const filteredResult = result?.filter(item => item !== null);

    if (filteredResult && filteredResult.length > 0) {
        const resultSort = filteredResult.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setDisplay(resultSort);
        setSearchData(resultSort)
    }
  }, [chats]);



  const setSearch = (e) => {
    const filterName = searchData?.filter((item) =>
        item?.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    setDisplay(filterName);
  };

  const forward = (data)=>{
    const chatNo = chats.filter(item => item.members.includes(userId) && item.members.includes(data._id));
    setSecondId(chatNo[0]?._id)
    navigate(`/chat/${data?._id}`)
  }

//! Online Olma durumuna gore border rengi degisecek

  const borderStyle = online ?  "3px solid #31ee44":"3px solid #d7d7d7" ;

  const style = {
    width: "53px",
    height: "53px",
    border: borderStyle,
    borderRadius: "50%",
    overflow: "hidden",
  };
  
  return (
    <Box>
      {/* Title */}
      <Typography
          sx={{ padding: "1rem 0.5rem", fontSize: "24px", fontWeight: "700", boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px ", backgroundColor:"#fdffff", mb:"1rem"
        }}
      >
        Chats
      </Typography>

      {/* Search Box */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { p: "0 0.5rem", width: "100%" },
          mt: "0.5rem",
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
          key={item?._id}
        >
          <img
         style={style}
            src={item?.image ? item?.image : usernone}
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
                onClick={()=>forward(item)}
                sx={{ minWidth: "95%", fontWeight: "700" }}
              >
                {item?.name?.charAt(0).toUpperCase() +
                  item?.name?.slice(1).toLowerCase()}
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
                  right: swipe === item?._id ? "0rem" : "-7rem",
                  transition: "1s",
                }}
              >
                <Box
                  sx={{
                    borderBottomLeftRadius: "0.5rem",
                    borderTopLeftRadius: "0.5rem",
                    width: "55%",
                    height: "101%",
                    backgroundColor: "#919090",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DeleteIcon
                    cursor="pointer"
                    onClick={() => deleteChat(item?._id)}
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
                    backgroundColor: "#547aa4",
                    cursor: "pointer",
                  }}
                >
                  <ClearOutlinedIcon onClick={() => setSwipe("-7rem")} />
                </Box>
              </Box>
              <MoreHorizIcon
                onClick={(e) => setSwipe(item?._id)}
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
                onClick={()=>forward(item)}
                sx={{
                    fontSize:"0.8rem",
                    color:"#323232dd",
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
                 sx={{
                  fontSize:"0.8rem",
                  color:"#323232dd",
                  width: "75%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                  width={"25%"}
                  textAlign={"end"}
                  onClick={()=>forward(item)}
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
