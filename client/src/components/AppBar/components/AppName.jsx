import React from 'react';
import Box from '@mui/material/Box';

const AppName = function () {
  /**
   * This function returns the image logo and the app name
   */
  return (
    <Box sx={{ display: 'flex' }}>
      {/* The image which contains the logo and name of the app */}
      <img
        alt="logo"
        src={`${process.env.PUBLIC_URL}/images/my_unsplash_logo.svg`}
      />
    </Box>
  );
};

// export the function so as to be used ouside this file
export default AppName;
