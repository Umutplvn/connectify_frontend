import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import useAuthCall from "../hooks/useAuthCall";

const Status = () => {

  const {logout}=useAuthCall()

  const loggedOut = ()=>{
    logout()
    localStorage.removeItem('selected'); // Kullanıcı bilgilerini localStorage'den kaldır

  }

  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700", backgroundColor:"#f8fcfb" }}
      >
        Settings
      </Typography>
      <Button onClick={loggedOut}>Logout</Button>
      <Footer />
    </Box>
  );
};

export default Status;
