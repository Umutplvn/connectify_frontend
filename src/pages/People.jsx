import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import Footer from "../components/Footer";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const Status = () => {
  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{ padding: "0.5rem", fontSize: "24px", fontWeight: "700" }}
      >
        People
      </Typography>


      {/* Search Box */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { p: "0 0.5rem", width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => {
            console.log(e);
          }}
          id="outlined-password-input"
          type="search"
          size="small"
          autoComplete="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ alignSelf: "center" }}>
                <SearchOutlinedIcon
                  sx={{ display: true ? "block" : "none" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>


      <Footer />
    </Box>
  );
};

export default Status;
