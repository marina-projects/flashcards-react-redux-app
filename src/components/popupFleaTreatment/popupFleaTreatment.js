import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import NewFleaTreatment from '../newFleaTreatment/newFleaTreatment';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

export default function PopupFleaTreatment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='modal-button-flea-text'>Add new flea treatment</Button>
      <IconButton onClick={handleOpen} className='modal-button-flea-icon'>
        <AddCircleOutlineIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewFleaTreatment />
        </Box>
      </Modal>
    </div>
  );
}