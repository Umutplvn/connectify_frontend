import React, { useEffect } from "react";
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
import { useSelector } from "react-redux";
import { MessageBox } from "react-chat-elements";
import useDataCall from "../hooks/useDataCall";

const FavoriteMessages = ({ handleToggle, openIndex }) => {
  const {getUser}=useDataCall()
  const {favMessages}=useSelector((state)=>state?.appData)
  const {userId}=useSelector((state)=>state?.auth)

  useEffect(() => {
    getUser(userId)
  }, [])

console.log(favMessages);

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
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#d1cccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2rem",
                  height: "2rem",
                }}
              >
                <KeyboardArrowUpIcon />
              </Box>
            ) : (
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#d1cccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "2rem",
                  height: "2rem",
                }}
              >
                <KeyboardArrowDownIcon />
              </Box>
            )}
          </IconButton>
        }
      ></CardHeader>

      <Box
        sx={{
          backgroundColor: "rgba(211,211,211,0.4)",
          overflow:"scroll",
        }}
      >
        <Collapse in={openIndex === 2} timeout="auto" unmountOnExit >
          <CardContent >
            <Container
              sx={{
                height: 100,
                lineHeight: 2,

              }}
            >

      {favMessages?.map((item, index) => (
        <Box key={index} style={{ width: "100%", margin: "0.3rem auto" }}>
             
    {item?.info?.replyto?
      <MessageBox
      position={item?.info?.sender?._id === userId ? "right" : "left"}
      type={"text"}
        text={
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
            </Box>

            {/* reply to*/}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "0.4rem",
                padding: "0.4rem",
                borderLeft:"0.4rem solid #63a44d"
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontFamily: "Halvetica",
                  fontWeight: "900",
                  color: "#63a44d",

                }}
              >
                {item?.info?.replyto?.sender?.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontFamily: "Halvetica",
                }}
              >
                {item?.info?.replyto?.text}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontFamily: "halvetica",
                mt: "0.3rem",
                mb:"-2rem",
                fontFamily: "Halvetica",

              }}
            >
              {item?.info?.text}
            </Typography>
          </Box>
        }
        date={item?.info?.createdAt}
        styles={{
          background: item?.info?.sender?._id === userId ? 
          "linear-gradient(to top right, #D9FDD3, #fff": "white",
          maxWidth: "80%",
        }}
      />
    :
    
    <MessageBox
    position={item?.info?.sender?._id === userId ? "right" : "left"}
    type={"text"}
    styles={
      item?.info?.sender?._id === userId
        ? {
          background: "linear-gradient(to top right, #D9FDD3, #fff",
          maxWidth: "80%",
          }
        : {
            maxWidth: "80%",

          }
    }
    text={
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        mb: "-2rem",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontSize: "0.9rem",
            lineHeight: "1",
            fontFamily: "Halvetica",
          }}
        >
          {item?.info?.text}
        </Typography>
      </Box>
    </Box>
    
    }
    date={item?.info?.createdAt}
    data={{
      status: {
        click: false,
        loading: 0,
      },
    }}
  />
    }
        </Box>
      ))}

 </Container>
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};

export default FavoriteMessages;
