import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import { useNavigate } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import AccountMenu from "../components/ChatsMoreMenu";

const Chats = () => {
  const { getChats, clearMessagesState } = useDataCall();
  const { getMyContacts } = useAuthCall();
  const { chats } = useSelector((state) => state?.appData);
  const { contacts } = useSelector((state) => state?.auth);
  const [display, setDisplay] = useState([]);
  const [changed, setChanged] = useState(true);
  const [online, setOnline] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    clearMessagesState();
    getChats();
    getMyContacts();
  }, []);

  useEffect(() => {
    const chatData = chats?.filter((item) => item?.show === true);
    const filteredContacts = [];
    contacts.forEach((contact) => {
      const contactId = contact._id;
      chatData.forEach((chat) => {
        const members = chat.members;
        if (
          members.includes(contactId) &&
          !filteredContacts.some((c) => c._id === contactId)
        ) {
          filteredContacts.push(contact);
        }
      });
    });
    setDisplay(filteredContacts || []);
    setSearchData(filteredContacts||[])
  }, [chats, contacts]);

  const setSearch = (e) => {
    const filterName = searchData?.filter((item) =>
      item?.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplay(filterName);
  };

  const forward = (data) => {
    navigate(`/chat/${data}`);
  };

  //! Online Olma durumuna gore border rengi degisecek

  const borderStyle = online ? "3px solid #31ee44" : "3px solid #d7d7d7";

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
        sx={{
          padding: "1rem 0.5rem",
          fontSize: "24px",
          fontWeight: "700",
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px ",
          backgroundColor: "#fdffff",
          mb: "1rem",
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
          <img style={style} src={item?.image} alt="PP" />
          <Box
            sx={{
              width: "100%",
              p: "0.3rem",
              borderBottom: "0.5px solid #e0e4eb",
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                onClick={() => forward(item?._id)}
                sx={{ minWidth: "95%", fontWeight: "700" }}
              >
                {item?.name.charAt(0).toUpperCase() +
                  item?.name.slice(1).toLowerCase()}
              </Typography>

              <AccountMenu item={item} />
            </Box>

            <Box>
              <Box
                sx={{ width: "100%", color: "#4b4e55" }}
                display="flex"
                justifyContent={"space-between"}
                onClick={() => forward(item?._id)}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#323232dd",
                    width: "75%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/*!!!!! Will be filled with real data !!!! */}
                  Text Message
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#323232dd",
                    width: "75%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  width={"25%"}
                  textAlign={"end"}
                >
                  DATE
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
