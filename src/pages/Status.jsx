import {
  Avatar,
  Box,
  Button,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Notes from "../components/Notes";
import useDataCall from "../hooks/useDataCall";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useSelector } from "react-redux";
import usernone from "../assets/upload.svg";
import { statusStyle } from "../styles/globalStyle";

const Status = () => {
  const { userId } = useSelector((state) => state.auth);
  const { stories } = useSelector((state) => state.appData);
  const { getNotes, createStory } = useDataCall();

  useEffect(() => {
    getNotes();
  }, []);

  const gradientBackground = {
    background: "linear-gradient(to bottom right, #e7e7f3, #cee2d7)",
  };

  const [postImage, setPostImage] = useState({ content: "", userId: userId });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, content: base64 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStory(postImage);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{
          padding: "1rem 0.5rem",
          fontSize: "24px",
          fontWeight: "700",
          boxShadow: " rgba(17, 17, 26, 0.1) 0px 1px 0px ",
          backgroundColor: "#fdffff",
        }}
      >
        Status
      </Typography>
      <Notes />

      <Box
        sx={{
          display: "flex",
          width: "100wh",
          height: "100vh",
          backgroundColor: "white",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
          p: "0.5rem",
        }}
      >
        {/* Photo */}

        <Box
          style={gradientBackground}
          sx={{
            width: "50%",
            height: "15rem",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            m: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          {/* Upload Image */}

          <form
            // type="form"
            display={"flex"}
            flexDirection={"column"}
            sx={{ justifyContent: "space-between" }}
            onSubmit={handleSubmit}
          >
            <InputLabel htmlFor="file-upload">
              <Typography sx={{ fontSize: "4rem", mt: "3rem" }}>📷</Typography>
            </InputLabel>

            <Input
              type="file"
              label="Image"
              name="myFile"
              id="file-upload"
              accept=".jpeg, .png, .jpg"
              sx={{ display: "none" }}
              onChange={(e) => handleFileUpload(e)}
            />
            <Button sx={statusStyle} type="Submit">
              POST
            </Button>
          </form>

          {/* Upload Image */}
        </Box>

        {/* Friends */}

        <Box
          sx={{
            width: "50%",
            height: "15rem",
            backgroundColor: "white",
            m: "1rem",
            position: "relative",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
          }}
        >
          {/* <img
            src={stories?.data?.response[0]?.content || usernone}
            alt=""
            width={"100px"}
          /> */}
          <Avatar
            sx={{ position: "absolute", bottom: "0.5rem", left: "0.5rem" }}
            variant="contained"
            component="label"
          />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Status;

//    <Box
// sx={{
//   rotate: "-30deg",
//   display: "flex",
//   backgroundColor: "#ef781e",
//   color:"white",
//   p: "0.3rem",
//   gap: 1,
//   borderRadius: "0.5rem",
//   mt: "2.3rem",
//   ml: "0.5rem",
//   position: "absolute",
// }}
// >
// <AddAPhotoIcon sx={{ fontSize: "1.5rem" }} />
// <Typography sx={{ fontSize: "1.2rem", fontWeight: "900" }}>
//   Add Yours
// </Typography>
// </Box>

// <Box>
// <Typography
//   sx={{ ml: "1rem", mt: "-0.8rem", fontSize: "3.5rem" }}
// >
//   😍
// </Typography>

// <Typography
//   sx={{ ml: "5rem", mt: "-1rem", fontSize: "3.5rem" }}
// >
//   😜
// </Typography>
// </Box>
