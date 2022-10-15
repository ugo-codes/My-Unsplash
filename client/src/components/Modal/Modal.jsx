import React from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CustomModal = function ({ open, handleClose, View, setImages }) {
  /** This function returns a modal i.e. a the popup shown on the screen */

  // Thsi is the styles for the Box component which contains the view
  // shown in the modal
  const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing(40),
    backgroundColor: theme.palette.background.main,
    border: '2px solid #000',
    boxShadow: 24,
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
  }));

  return (
    <Backdrop open={open} transitionDuration={500}>
      {/* The actual modal itself */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
        {/* The view shown on the modal, it is being passed as a prop */}
        <View closeModal={handleClose} setImages={setImages}/>
        </ModalBox>
      </Modal>
    </Backdrop>
  );
};

// export the function as default
export default CustomModal;
