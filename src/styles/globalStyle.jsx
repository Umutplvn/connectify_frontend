export const btnRed = {
  backgroundColor: "#cb5b5b",
  color: "white",
  "&:hover": { backgroundColor: "#b71c1c" },
};

export const btnGreen = {
  backgroundColor: "#3ea17b",
  color: "white",
  "&:hover": { backgroundColor: "success.dark" },
};

export const addRemoveStyle = {
  width: "3rem",
  color: "#4f9bbf",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const btnLead = {
  variant: "contained",
  m: "1rem 0.5rem",
  type: "submit",
  backgroundColor: "#3E97EF",
  color: "white",
  width: "8rem",
  display: "flex",
  "&:hover": {
    backgroundColor: "primary.dark",
    boxShadow: "rgba(0, 0, 0, 0.24) 2px 3px 3px",
  },
};

export const statusStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "0.01px solid  #8f8c8c",
  borderRadius: "0.5rem",
  width: "4rem",
  height: "2.5rem",
  fontWeight:"800",
  background: "linear-gradient(to bottom right, #b7f2df, #daa26e)",
  cursor:"pointer",
  mt:"4rem",
  color:"black"
};

export const logStyle = {
  position: "fixed",
  bottom: "7rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "0.1rem",
  cursor:"pointer",
  position: "absolute", 
  zIndex:-1,
  alignItems:"center",
    fontWeight: "600", fontSize: "1.1rem",
    transition: "color 0.3s, transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },

};
