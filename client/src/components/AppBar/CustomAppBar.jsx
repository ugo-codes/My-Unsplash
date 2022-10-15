import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AddButton from './components/AddButton';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppName from './components/AppName';
import SearchBar from './components/SearchBar';

const CustomAppBar = function ({ setImages }) {
  /**
   * This function returns the app bar seen at the top of the screen
   */

  // Create a variable and a function to monitor the position of the menu
  // Uses useState hook to know when the value of our variable changes
  const [menuAnchor, setMenuAnchor] = useState(null);
  // Create a variable to know when the menu is open
  const isMenuOpen = Boolean(menuAnchor);

  // A variable use to hold state and a function for setting the state
  const [openModal, setOpenModal] = useState(false);
  // A function for showing or opening the modal by setting the
  // openModal state variable to true
  const handleOpenModal = () => setOpenModal(true);
  // A function for hiding or closing the modal by setting the
  // openModal state variable to false
  const handleCloseModal = () => setOpenModal(false);

  // Create a function to get the event that triggers the opening of the menu
  // Sets the menuAnchor variable to the event.currentTarget
  const handleMenuOpen = function (event) {
    setMenuAnchor(event.currentTarget);
  };

  // Create a function to get the event that triggers the closing of the menu
  // Sets the menuAnchor variable to null
  const handleMenuClose = function () {
    setMenuAnchor(null);
    handleOpenModal();
  };

  // This represent the menu shows on the screen
  const renderMenu = (
    <Menu
      anchorEl={menuAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Add a photo</MenuItem>
    </Menu>
  );

  // returns the whole app bar seen on the screen
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* App Icon with the app name */}
          <AppName />
          {/* The search bar */}
          <SearchBar setImages={setImages} />
          <Box sx={{ flexGrow: 1 }} />
          {/* This is a div that contains a button, the visibility depends on the screen size */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* The button shown on the app bar which is to add a photo */}
            <AddButton
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
              setImages={setImages}
            />
          </Box>
          {/* This is a div that contans an icon button which triggers the menu,
          the visibility of the div depends on the size of the screen  */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="end"
              color="inherit"
              size="large"
              aria-label="show more"
              onClick={handleMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

// export the app bar ad a default
export default CustomAppBar;
