import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

const Footer = () => {
  return (
    <Box
      display="flex"
      position="fixed"
      bottom="0"
      width={"100%"}
      justifyContent="center"
      sx={{borderTop:"solid 0.5px #a6a9ab", borderRadius:"0.4rem", backgroundColor:"#F0F2F5",   fontFamily: "sans-serif", fontSize:"12px"}}
    >
      <Link to="/status" style={{ textDecoration: 'none', color: '#54656F', width: '20%', textAlign: 'center', padding: '0.5rem' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <CameraOutlinedIcon />
          Status
        </Box>
      </Link>

      <Link to="/people" style={{ textDecoration: 'none', color: '#54656F', width: '20%', textAlign: 'center', padding: '0.5rem' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <PersonAddOutlinedIcon />
          People
        </Box>
      </Link>

      <Link to="/chats" style={{ textDecoration: 'none', color: '#54656F', width: '20%', textAlign: 'center', padding: '0.5rem' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <MapsUgcOutlinedIcon />
          Chats
        </Box>
      </Link>

      <Link to="/contacts" style={{ textDecoration: 'none', color: '#54656F', width: '20%', textAlign: 'center', padding: '0.5rem' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Diversity2OutlinedIcon />
          Contacts
        </Box>
      </Link>

      <Link to="/settings" style={{ textDecoration: 'none', color: '#54656F', width: '20%', textAlign: 'center', padding: '0.5rem' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <SettingsOutlinedIcon />
          Settings
        </Box>
      </Link>
    </Box>
  );
};

export default Footer;
