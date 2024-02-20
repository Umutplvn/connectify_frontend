import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Chats = () => {
  const [changed, setChanged] = useState(true);
  const setSearch = (e) => {
    if (e.target.value.length > 0) {
      setChanged(false);
    } else {
      setChanged(true);
    }
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
      {/* Content */}

      <Footer />
    </Box>
  );
};

export default Chats;
