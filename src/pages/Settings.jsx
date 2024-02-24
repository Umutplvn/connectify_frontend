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
  sx={{ padding: "1rem 0.5rem", fontSize: "24px", fontWeight: "700", boxShadow:" rgba(17, 17, 26, 0.1) 0px 1px 0px ", backgroundColor:"#fdffff", mb:"1rem"
}}      >
        Settings
      </Typography>
      <Button onClick={loggedOut}>Logout</Button>
      <Footer />
    </Box>
  );
};

export default Status;
