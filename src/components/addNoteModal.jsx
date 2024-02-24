import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { btnGreen, btnRed } from "../styles/globalStyle";
import { useState } from "react";
import useAuthCall from "../hooks/useAuthCall";
import toast from 'react-hot-toast';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "12rem",
  bgcolor: "#DBE9FE",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};


export default function BasicModal({ open, handleClose }) {

const [note, setNote] = useState("")
const {update}=useAuthCall()

const handleAddNote=()=>{
update({note:note})
handleClose()
setNote("")
toast("Your note has been successfully shared.")
}

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{
              width: "100%",
              height: "3rem",
              mb:"1.5rem"
            }}
            value={note}
            onChange={(e)=>setNote(e.target.value)}
            multiline
            inputProps={{ maxLength: 50 }}
            placeholder="Notes..."
          />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: "auto",
              p: "1rem 0.5rem",
              gap: "1rem",
            }}
          >
            <Button
              sx={btnGreen}
              value={note}
              onClick={handleAddNote}
              variant="contained"
            >
              SHARE
            </Button>
            <Button sx={btnRed} onClick={handleClose} variant="contained">
              CANCEL
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
