import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import Footer from "../components/Footer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import usernone from "../assets/nouser.png";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

const Status = ({setContacts, contacts}) => {
  const { users } = useSelector((state) => state?.appData);
  useEffect(() => {
    getUsers();
  }, []);

  const [display, setDisplay] = useState([]);
  const { getUsers } = useDataCall();

  const handleSearch = (e) => {
    const searchKeyword = e.target.value.toLowerCase();
    let filteredData;
    if (searchKeyword.trim() === "") {
      filteredData = [];
    } else {
      filteredData = users?.data?.result?.filter((item) => {
        return (
          item.username.toLowerCase().includes(searchKeyword) ||
          item.name.toLowerCase().includes(searchKeyword)
        );
      });
    }
    setDisplay(filteredData);
  };


  const addFriend = (item) => {
    if (!contacts.some(contact => contact._id === item._id)) {
      setContacts([...contacts, item]);
    }
  };

  console.log("object");
  

  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700", backgroundColor:"#f8fcfb" }}
      >
        People
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
          onChange={(e) => handleSearch(e)}
          placeholder="Search"
          id="outlined-password-input"
          type="search"
          size="small"
          autoComplete="search"
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ alignSelf: "center" }}>
                <SearchOutlinedIcon sx={{ display: true ? "block" : "none" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {/* People Data*/}

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
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid #e0e4eb",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            src={item?.image ? item.image : usernone}
            alt="PP"
          />
          <Box
            sx={{
              width: "100%",
              display:"flex",
              p: "0.3rem",
              borderBottom: "0.5px solid #e0e4eb",
              justifyContent:"space-between"
            }}
          >
            <Box display={"flex"} flexDirection={"column"} width={"85%"} justifyContent={"space-between"}>
              <Typography sx={{ fontWeight: "700" }}>
                {item?.name.charAt(0).toUpperCase() +
                  item?.name.slice(1).toLowerCase()}
              </Typography>
              <Typography>
                @{item?.username}
              </Typography>
            </Box>
            <Box onClick={()=>addFriend(item)}  sx={{width:"3rem", backgroundColor:"#f7f7f8", color:"#3C9387", border:"0.1px solid #e7e4e4", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>


            <AddCircleRoundedIcon
                sx={{ cursor: "pointer", fontSize:30, rotate:(item._id==item._id ?`360deg`: "0deg"), transition:"1s" }}
              />
             </Box>


          </Box>
        </Box>
      ))}

      <Footer />
    </Box>
  );
};

export default Status;
