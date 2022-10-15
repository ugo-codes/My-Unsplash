import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ModalTextView = function ({ closeModal, setImages }) {
  /** This method return the text view wich is seen whenever the modal is open */

  // A viariable use to hold a state and a function to set the state
  const [passwordText, setPasswordText] = useState('');

  // Return the text view shown on the modal
  return (
    <>
      {/* The actual Text view shown in the modal with the attribute set already.
      It in a controoled state */}
      <TextField
        fullWidth
        placeholder="password"
        sx={{ py: 5 }}
        type="password"
        value={passwordText}
        onChange={event => setPasswordText(event.target.value)}
      />
      <Box sx={{ display: 'flex' }}>
        {/* Thsi box occupies the space horizontally */}
        <Box sx={{ flexGrow: 1 }}></Box>
        {/* The delete button show in the modal */}
        <Button
          variant="contained"
          color="error"
          onClick={() => setImages(passwordText)}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

// export the text view as default
export default ModalTextView;
