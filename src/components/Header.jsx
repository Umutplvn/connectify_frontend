import { Box, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:1, backgroundColor:"#eff8f7", mt:-1, pt:"1.5rem", pb:"0.6rem"}}>
    <Typography sx={{textAlign:"center", fontSize:"1.5rem", color:"#3C9387", fontWeight:"700"}}>CONNECTIFY</Typography>
    <SendIcon sx={{color:"#3C9387"}}/>
    </Box>
    
  )
}

export default Header