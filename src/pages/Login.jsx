import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import useAuthCall from "../hooks/useAuthCall";
import bgImage from "../assets/background.jpeg"
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Login = () => {

const {login}=useAuthCall()

const {error}=useSelector((state)=>state.auth)
const [info, setInfo] = useState({email:"", password:""});
const handleChange = (e) => {
  e.preventDefault();
  setInfo({...info, [e.target.name]:e.target.value});
};

const handleSubmit=(e)=>{
  e.preventDefault();
    login(info)
}

  return (
         <Box  style={{
      position: "relative",
      height: "100vh",
    }}>

   
    <Box style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity:"0.5",
    zIndex: -1 }}>
<img src={bgImage} alt="background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</Box>

      <Header/>
    <Box sx={{ textAlign:"center", mt:"3rem"}}>
      <Typography sx={{color:"#3B9387", fontSize:"1.5rem", mb:"1rem"}}>Login to the Connectify</Typography>
      <Typography>Welcome to Connectify! Please enter your credentials to access your account.</Typography>

      <Box component="form" onSubmit={(e)=>handleSubmit(e)} sx={{ mt: 3 }}>
        <Box container spacing={2}>

          <Box sx={{mb:"1rem"}} >
            <TextField
              required
              fullWidth
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              InputLabelProps={{
                style: { color: "black" },
              }}

            />
          </Box>
          <Box sx={{mb:"1rem"}} >
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
              InputLabelProps={{
                style: { color: "black" },
              }}

            />
          </Box>
        </Box>

       

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, pl:4, pr:4, backgroundColor:"#41D463", "&:hover": { backgroundColor: "#2daa4a"} }}
        >
          Login
        </Button>

        <Box container justifyContent="flex-end">
          <Box >
            <Link href="/register" variant="body2">
              Don't you have an account? Sign up
            </Link>
          </Box>

          <Box >
            <Link href="#" variant="body2">
              
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default Login