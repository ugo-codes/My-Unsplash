import React from 'react';
import Button from '@mui/material/Button';
import Modal from '../../Modal/Modal';
import AddPhotoModalView from './AddPhotoModalView'

const AddButton = function ({openModal, setOpenModal, handleOpenModal, handleCloseModal, setImages}) {


  return (
    <>
    {/* The button shown on the app bar */}
      <Button variant="contained" color="success" onClick={handleOpenModal}>
        Add a photo
      </Button>
      <Modal open={openModal} handleClose={handleCloseModal} View={AddPhotoModalView} setImages={setImages}/>
    </>
  );
};

export default AddButton;
