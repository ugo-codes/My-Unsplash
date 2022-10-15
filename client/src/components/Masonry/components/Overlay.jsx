import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DeleteModalView from './DeleteModalView';
import Modal from '../../Modal/Modal';
import { useSnackbar } from 'notistack';
import qs from 'qs';
import axios from 'axios';
import { SERVER_URL } from '../../../config/config';

const Overlay = function ({ image, setImages }) {
  /** This function returns the over lay view which is the view seen whenever the mouse
   * hovers ontop of an image
   */

  // A variable use to hold state and a function for setting the state
  const [openModal, setOpenModal] = useState(false);
  // A function for showing or opening the modal by setting the
  // openModal state variable to true
  const handleOpenModal = () => setOpenModal(true);
  // A function for hiding or closing the modal by setting the
  // openModal state variable to false
  const handleCloseModal = () => setOpenModal(false);

  // This is library that displays the snack bar
  // The snack bar is use for giving feedback to the user
  const { enqueueSnackbar } = useSnackbar();

  // The CSS styles for a div representing the overlay
  const Overlay = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: '0',
    cursor: 'pointer',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    width: '100%',
    height: '100%',
    transition: '.5s ease',
    opacity: '0',
    fontSize: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    '&:hover': {
      opacity: '1',
    },
  }));

  // The CSS styles for the delete button shown on the overlay
  const DeleteButton = styled(Button)(({ theme }) => ({
    width: '4rem',
    alignSelf: 'flex-end',
  }));

  // The CSS styles for the text shown on the overlay
  const CustomTypography = styled(Typography)(({ theme }) => ({
    // alignSelf: 'flex-start'
    position: 'absolute',
    bottom: '0',
  }));

  // This method is called once the delete button in the modal is pressed
  const deleteImage = async function (passwordText) {
    handleCloseModal();
    if (!passwordText) {
      // Show a success snack bar with a message
      enqueueSnackbar('Enter the Password', { variant: 'error' });
      return;
    }

    if (image.password !== passwordText) {
      enqueueSnackbar('Wrong Password', { variant: 'error' });
      return;
    }
    try {
      const response = await axios.delete(`${SERVER_URL}/photo/delete`, {
        headers: {
          API_KEY: '5a615ca2be415b505352dd',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify(image),
      });

      if (!response.data.acknowledged) {
        enqueueSnackbar("Couldn't delete the photo, please try again later", {
          variant: 'error',
        });
      }

      setImages(prev => {
        const index = prev.findIndex(
          el =>
            el.title === image.title &&
            el.img === image.img &&
            el.password === image.password
        );
        prev.splice(index, 1);
        return [...prev];
      });

      enqueueSnackbar('Image deleted successfully', { variant: 'success' });
    } catch (error) {
      console.log(error);
    }
  };

  // returns the overlay
  return (
    <>
      {/* The overlay which is a dic with some CSS styling */}
      <Overlay>
        {/* The delete button shoen on the overlay */}
        <DeleteButton
          variant="outlined"
          color="error"
          onClick={handleOpenModal}
        >
          Delete
        </DeleteButton>
        {/* The Text shown on the overlay */}
        <CustomTypography variant="subtitle1">{image.title}</CustomTypography>
      </Overlay>
      {/* // The Modal shown for confirmation whenever the delete button is clicked  */}
      <Modal
        open={openModal}
        handleClose={handleCloseModal}
        View={DeleteModalView}
        setImages={deleteImage}
      />
    </>
  );
};

// export the overlay as default
export default Overlay;
