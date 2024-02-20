import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";

const Status = () => {
  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700" }}
      >
        Contacts
      </Typography>
      <Footer />
    </Box>
  );
};

export default Status;
