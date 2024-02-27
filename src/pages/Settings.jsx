import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';


const Settings = () => {
  return (
   <Box>
         <Typography
        sx={{
          padding: "1rem 0.5rem",
          fontSize: "24px",
          fontWeight: "700",
          boxShadow: " rgba(17, 17, 26, 0.1) 0px 1px 0px ",
          backgroundColor: "#fdffff",
          mb: "1rem",
        }}
      >
        Settings
      </Typography>

    <Box>

<Accordion>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1-content"
       id="panel1-header"
     >
       Accordion 1
     </AccordionSummary>
     <AccordionDetails>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
       malesuada lacus ex, sit amet blandit leo lobortis eget.
     </AccordionDetails>
   </Accordion>
   <Footer />
 </Box>
   </Box>
  )
}

export default Settings