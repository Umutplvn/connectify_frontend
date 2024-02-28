import React, { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";

const Settings = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <Typography
        sx={{
          padding: "1rem 0.5rem",
          fontSize: "24px",
          fontWeight: "700",
          backgroundColor: "#fdffff",
        }}
      >
        Settings
      </Typography>

      <Card
        sx={{
          minWidth: 300,
          border: "1px solid rgba(211,211,211,0.6)",
        }}
      >
        <CardHeader
          title="Complete Interview Preparation"
          action={
            <IconButton
              onClick={() => handleToggle(1)}
              aria-label="expand"
              size="small"
            >
              {openIndex === 1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        ></CardHeader>
        <Box
          sx={{
            backgroundColor: "rgba(211,211,211,0.4)",
          }}
        >
          <Collapse in={openIndex === 1} timeout="auto" unmountOnExit>
            <CardContent>
              <Container
                sx={{
                  height: 100,
                  lineHeight: 2,
                }}
              >
                An interview-centric course designed to prepare you for the role
                of SDE for both product and service-based companies. A placement
                preparation pack built with years of expertise. Learn Resume
                Building, C++, Java, DSA, CS Theory concepts, Aptitude,
                Reasoning, LLD, and much more!
              </Container>
            </CardContent>
          </Collapse>
        </Box>
      </Card>

      <Card
        sx={{
          minWidth: 300,
          border: "1px solid rgba(211,211,211,0.6)",
        }}
      >
        <CardHeader
          title="Complete Interview Preparation"
          action={
            <IconButton
              onClick={() => handleToggle(2)}
              aria-label="expand"
              size="small"
            >
              {openIndex === 2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        ></CardHeader>
        <Box
          sx={{
            backgroundColor: "rgba(211,211,211,0.4)",
          }}
        >
          <Collapse in={openIndex === 2} timeout="auto" unmountOnExit>
            <CardContent>
              <Container
                sx={{
                  height: 100,
                  lineHeight: 2,
                }}
              >
                An interview-centric course designed to prepare you for the role
                of SDE for both product and service-based companies. A placement
                preparation pack built with years of expertise. Learn Resume
                Building, C++, Java, DSA, CS Theory concepts, Aptitude,
                Reasoning, LLD, and much more!
              </Container>
            </CardContent>
          </Collapse>
        </Box>
      </Card>
      <Footer />
    </Box>
  );
};

export default Settings;
