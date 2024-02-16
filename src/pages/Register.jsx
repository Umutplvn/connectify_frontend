import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FormGroup, Modal } from '@mui/material';
import Agreement from '../components/Agreement';
import useAuthCall from "../hooks/useAuthCall"

const Register = () => {
  const [info, setInfo] = useState({email:"", password:"", name:"", label:""});
  const [openModal, setOpenModal] = useState(false);
  const {register}=useAuthCall()


  const handleChange = (e) => {
    e.preventDefault();
    setInfo({...info, [e.target.name]:e.target.value});
    };

  const handleSubmit=(e)=>{
    e.preventDefault()
    register(info)
  }


  const handleAgreementLinkClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Box sx={{ textAlign:"center", mt:"3rem"}}>
        <Typography sx={{color:"#3B9387", fontSize:"1.5rem", mb:"1rem"}}>Register to the Connectify</Typography>
        <Typography>Connectify will send you an email to verify your email address. Please fill the required fields below correctly. </Typography>

        <Box component="form" onSubmit={(e)=>handleSubmit(e)} sx={{ mt: 3 }}>
          <Box container spacing={2}>
            <Box  sx={{mb:"1rem"}}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChange}
              />
            </Box>
      
            <Box sx={{mb:"1rem"}} >
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}

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

              />
            </Box>
          </Box>

          <FormGroup>
            <FormControlLabel
              name="label"
              required
              control={<Checkbox  />}
              onChange={handleChange}

              label={
                <span onClick={handleAgreementLinkClick}>
                  Please double click to agree to the{' '}
                  <Link href="#" onClick={handleAgreementLinkClick}>
                    Connectify user agreement
                  </Link>
                  .
                </span>
              }
            />
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, pl:4, pr:4, backgroundColor:"#41D463", "&:hover": { backgroundColor: "#2daa4a"} }}
          >
            Sign Up
          </Button>

          <Box container justifyContent="flex-end">
            <Box >
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Box>

            <Box >
              <Link href="#" variant="body2">
                
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       sx={{overflow:"scroll", pt:"2rem", pb:"2rem"}}
            
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: "90%", bgcolor: 'background.paper', boxShadow: 24, p: 4, overflow:"scroll", mt:"4rem",mb:"4rem" }}>
<Agreement onClose={handleCloseModal}
/>          
        </Box>
      </Modal>
    </Box>
  );
}

export default Register;
