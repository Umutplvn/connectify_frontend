import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAuthCall from "../hooks/useAuthCall";

const EmailVerification = () => {

    const {passcode,userId}=useSelector((state)=>state.auth)
    const {deleteUser, update}=useAuthCall()
    const navigate=useNavigate()


    const [pass, setPass] = useState()
    const [chance, setChance] = useState(0)

    const handleChange=(e)=>{
        setPass(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setChance(chance+1)
        if(passcode==pass){
            update(userId, {verified:true})
            navigate('/main')
            toastSuccessNotify("Welcome to Connectify")
        }else if(chance==2){
          toastErrorNotify("Passcode is wrong")
          deleteUser(userId)
          navigate("/register")
        }else{
          toastErrorNotify("Passcode is wrong")
          setPass("")
        }
    }

  return (
    <Box>
      <Box sx={{ textAlign:"center", mt:"5rem"}}>
        <Typography sx={{color:"#3B9387", fontSize:"1.5rem", mb:"1rem"}}>Verify your email address</Typography>
        <Typography>Thank you for registering. We've sent a verification code to your email. Please enter this code in the designated box to complete the registration process.</Typography>

        <Box component="form" onSubmit={(e)=>handleSubmit(e)} sx={{ mt: 3 }}>
          <Box container spacing={2}>
        
            <Box sx={{mb:"1rem"}} >
              <TextField
              sx={{mt:"3rem"}}
                required
                fullWidth
                name="pass"
                label="Passcode"
                type="pass"
                id="pass"
                value={pass}
                autoComplete="pass"
                onChange={handleChange}
              />
            </Box>
          </Box>

       

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, pl:4, pr:4, backgroundColor:"#41D463", "&:hover": { backgroundColor: "#2daa4a"} }}
          >
            Confirm
          </Button>

        </Box>
      </Box>

   
    </Box>
  )
}

export default EmailVerification