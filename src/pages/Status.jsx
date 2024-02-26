import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Notes from "../components/Notes";
import useDataCall from "../hooks/useDataCall";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const Status = () => {
  const { getNotes, createStory } = useDataCall();
  useEffect(() => {
    getNotes();
  }, []);
  const gradientBackground = {
    background: "linear-gradient(to right, #b5b5e3, #c5f2d9)",
  };

  const gradientBackgroundIcon = {
    background: "linear-gradient(to right, #ea8e47, #dd697c)",
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    console.log(selectedImage);
  };

  const handleStory = async () => {
    try {
      // Görsel seçilmiş mi kontrol edin
      if (!selectedImage) {
        alert("Please select an image.");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedImage);

      await createStory(formData); // Seçilen görseli içeren FormData nesnesini kullanarak hikaye oluşturun
    } catch (error) {
      console.error("Error creating story:", error);
      // Hata durumunda uygun bir şekilde işleyin (toast, alert, vb.)
    }
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
            display: "flex",
            borderRadius: "0.5rem",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "4rem",
              color: "#F37715",
              fontSize: "1rem",
              fontWeight: "900",
            }}
          >
            <Box
              sx={{
                rotate: "-30deg",
                display: "flex",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                p: "0.1rem",
                gap: 1,
                borderRadius: "0.5rem",
                mt: "4rem",
              }}
            >
              <AddAPhotoIcon sx={{ fontSize: "1.2rem" }} />
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "900" }}>
                Add Yours
              </Typography>
            </Box>

            <Typography sx={{ ml: "4rem", mt: "0.5rem", fontSize: "3.5rem" }}>
              😜
            </Typography>
          </Box>

          <Box>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="upload-image"
            />
            <label htmlFor="upload-image">
              <Button
                variant="contained"
                component="span"
                startIcon={<AddAPhotoIcon />}
              >
                Select Image
              </Button>
            </label>
            <Button variant="contained" onClick={handleStory}>
              Upload Story
            </Button>
          </Box>
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
