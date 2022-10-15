import React from 'react';
import Typography from '@mui/material/Typography';
import TextView from './ModalTextView';

const DeleteModalView = function ({ closeModal, setImages }) {
  /** This function returns the view seen on the modal whenever the delete button is clicked on the overlay */

  // return the view
  return (
    <>
      {/* The text displayed in the modal */}
      <Typography id="modal-modal-title" variant="h6">
        Are You Sure You Want to Delete This Picture?
      </Typography>
      {/* The text view and delete buttondisplayed in the modal */}
      <TextView closeModal={closeModal} setImages={setImages}/>
      {/* A Box or a div containng another box and the delete button */}
    </>
  );
};

// export the funtion as default
export default DeleteModalView;
