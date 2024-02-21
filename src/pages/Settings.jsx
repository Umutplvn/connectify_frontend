import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import useAuthCall from "../hooks/useAuthCall";

const Status = () => {

  const {logout}=useAuthCall()

  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700", backgroundColor:"#f8fcfb" }}
      >
        Settings
      </Typography>
      <Button onClick={()=>logout()}>Logout</Button>
      <Footer />
    </Box>
  );
};

export default Status;
