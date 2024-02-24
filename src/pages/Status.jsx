import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Notes from "../components/Notes";

const Status = () => {
  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "1rem 0.5rem", fontSize: "24px", fontWeight: "700", boxShadow:" rgba(17, 17, 26, 0.1) 0px 1px 0px ", backgroundColor:"#fdffff"
      }}
      >
        Status
      </Typography>
      <Notes/>

      <Footer />
    </Box>
  );
};

export default Status;
