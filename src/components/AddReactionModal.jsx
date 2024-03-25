import Box from '@mui/material/Box';
import EmojiPicker from 'emoji-picker-react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddReaction({ setOpenModal, openModal}) {
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box>
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <EmojiPicker reactionsDefaultOpen={true} />
      </Box>
    </Modal>
  </Box>
);
}
