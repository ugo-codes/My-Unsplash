import React from 'react';
import Typography from '@mui/material/Typography';
import TextView from './ModalTextView';

const AddPhotoModalView = function ({ closeModal, setImages }) {
  /** This function returns the view shown on the modal whenever the add a photo button is being clicked  */

  

  return (
    <>
      {/* The text displayed in the modal */}
      <Typography id="modal-modal-title" variant="h6">
        Add a Picture
      </Typography>

      {/* The text view displayed in the modal */}
      <TextView closeModal={closeModal} setImages={setImages}/>
    </>
  );
};

// export the function as a default
export default AddPhotoModalView;
