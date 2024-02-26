import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTopLeftRadius:"0.5rem",
  borderTopRightRadius:"0.5rem",
  border: `${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<StarRoundedIcon sx={{ fontSize: "1.5rem", backgroundColor:"#F7BE25", color:"white", borderRadius:"0.3rem",  }} />}
    {...props}
  />
))(({ theme }) => ({
 
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    transition:"0.5s"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
          <Typography
        sx={{ padding: "1rem 0.5rem", fontSize: "24px", fontWeight: "700", boxShadow:" rgba(17, 17, 26, 0.1) 0px 1px 0px ", backgroundColor:"#fdffff"
      }}
      >
        Settings
      </Typography>
      <Box 
      sx={{p:"1rem"}}
      >


        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Starred Messages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet,
            </Typography>
          </AccordionDetails>
        </Accordion>

     


      </Box>
      <Footer />
    </Box>
  );
}
