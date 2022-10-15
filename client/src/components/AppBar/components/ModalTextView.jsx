import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { SERVER_URL } from '../../../config/config';
import qs from 'qs';
import { useSnackbar } from 'notistack';

const ModalTextView = function ({ closeModal, setImages }) {
  // This is library that displays the snack bar
  // The snack bar is use for giving feedback to the user
  const { enqueueSnackbar } = useSnackbar();

  // create a state and a function to set the state for the value of the input
  const [text, setText] = useState({
    textField1: '',
    textField2: '',
    textField3: '',
  });

  const updateText = function (e) {
    /** This function is called whenever the user types in the input */

    // get the name and value of the input
    const { name, value } = e.target;

    // set the variable responsible for holding that particular value
    setText(prev => ({ ...prev, [name]: value }));
  };

  const addPhoto = async function () {
    closeModal();

    if (!text.textField1 || !text.textField2 || !text.textField3) {
      enqueueSnackbar('Enter all the field', { variant: 'error' });
      return;
    }

    const body = {
      title: text.textField1,
      img: text.textField2,
      password: text.textField3,
    };
    try {
      const response = await axios.post(
        `${SERVER_URL}/photo/add`,
        qs.stringify(body),
        {
          headers: {
            API_KEY: '5a615ca2be415b505352dd',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setImages(prev => [...prev, response.data]);
      enqueueSnackbar('Photo added successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('An error occured, try again later.', {
        variant: 'error',
      });
    }
  };

  return (
    <>
      <TextField
        name="textField1"
        fullwidth="true"
        placeholder="Image Title"
        sx={{ py: 3 }}
        type="text"
        value={text.textField1}
        onChange={updateText}
      />
      <TextField
        name="textField2"
        fullwidth="true"
        placeholder="Image Link"
        sx={{ py: 3 }}
        type="text"
        value={text.textField2}
        onChange={updateText}
      />
      <TextField
        name="textField3"
        fullwidth="true"
        placeholder="Image Password"
        sx={{ py: 3 }}
        type="password"
        value={text.textField3}
        onChange={updateText}
      />
      {/* A Box or a div containng another box and the delete button */}
      <Box sx={{ display: 'flex' }}>
        {/* Thsi box occupies the space horizontally */}
        <Box sx={{ flexGrow: 1 }}></Box>
        {/* The delete button show in the modal */}
        <Button variant="contained" color="success" onClick={addPhoto}>
          Add
        </Button>
      </Box>
    </>
  );
};

export default ModalTextView;
