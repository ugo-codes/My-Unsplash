import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Overlay from './components/Overlay';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';

const CustomMansory = function ({ images, setImages }) {
  /** This method returns the masonry view which is the view that containsthe many
   * images shown on the screen
   */

  useEffect(() => {
    const getImages = async function () {
      try {
        const response = await axios.get(`${SERVER_URL}/photo/all`, {
          headers: { API_KEY: '5a615ca2be415b505352dd' },
        });
        setImages(response.data);
      } catch (error) {}
    };

    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This is the CSS styles for a div where the images are contained individually
  const Div = styled('div')(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: 0,
    maxWidth: '10.13rem',
    position: 'relative',
  }));

  // The CSS styles for the images
  const CustomImage = styled('img')(({ theme }) => ({
    width: '10.13rem',
    maxHeight: '20rem',
    borderRadius: '5px',
    display: 'block',
  }));

  // return the Masonry view
  return (
    <Box>
      {/* The actual mansonry that deals with the positioning of the image displayed on the screen */}
      <Masonry columns={{ xs: 2, sm: 4 }} spacing={{ xs: 1, sm: 2 }}>
        {images.map((image, index) => (
          <Div key={index}>
            {/* The Image shown on the screen */}
            <CustomImage src={image.img} alt={image.title} loading="lazy" />
            {/* The div shown whenever the mouse hover ontop of an image */}
            <Overlay image={image} setImages={setImages} />
          </Div>
        ))}
      </Masonry>
    </Box>
  );
};

// export the masonry
export default CustomMansory;
