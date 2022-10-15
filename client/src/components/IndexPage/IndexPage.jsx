import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CustomAppBar from '../AppBar/CustomAppBar';
import CustomMansory from '../Masonry/CustomMansory';

const IndexPage = function () {
  /**
   * This method returns the whole home page
   */

  // This is a variable that holds state and a function use to set the state
   const [images, setImages] = useState([]);


  return (
    <Box>
      {/* The app bar on top of the screen */}
      <CustomAppBar setImages={setImages}/>
      {/* The masonry which contains the images shown on the screen */}
      <CustomMansory images={images} setImages={setImages}/>
    </Box>
  );
};

// export the IndexPage function as a default
export default IndexPage;
