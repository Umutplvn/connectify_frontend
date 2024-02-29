import React from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

const FavoriteMessages = ({handleToggle, openIndex}) => {
  return (
    <Card
    sx={{
      minWidth: 300,
      border: "1px solid rgba(211,211,211,0.6)",
    }}
  >
    <CardHeader
      title={
        <React.Fragment>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <StarsRoundedIcon sx={{ fontSize: "2rem", color: "#d8d52b" }} />
            <Typography sx={{ fontSize: "1.2rem" }}>
              Favorite Messages
            </Typography>
          </Box>
        </React.Fragment>
      }
      action={
        <IconButton
          onClick={() => handleToggle(2)}
          aria-label="expand"
          size="small"
        >
          {openIndex === 2 ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
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
)
}

export default FavoriteMessages