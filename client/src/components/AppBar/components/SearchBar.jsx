import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const SearchBar = function ({ setImages }) {
  /**
   * This function returns the search bar view where the user can search for a picture usintg
   * the title of the picture
   */

  // This is the css styles for the div containing the the search input
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  // This is the css style for the div containing the search icon
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  // This is the css style for the InputBase
  // Where the user will actually type
  const SearchInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '0ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }));

  const searchImages = function (e) {
    // if it wasn't the enter key that was pressed return
    if (e.key !== 'Enter') return;

    // if there is no text written return
    if (e.target.value === '') return;

    // get the value that was typed
    const { value } = e.target;

    // update the masonry to show only the image searched for
    setImages(prev => prev.filter(img => img.title === value));
  };

  // returns the seach view
  return (
    // The div contaning the text search view
    <Search>
      {/* The wrapper or container containing the serach icon */}
      <SearchIconWrapper>
        {/* The search icon shown in he search bar */}
        <SearchIcon />
      </SearchIconWrapper>
      {/* The input where the user's words are typed into */}
      <SearchInputBase
        placeholder="Search"
        onKeyDown={searchImages}
      ></SearchInputBase>
    </Search>
  );
};

// export the function as default
export default SearchBar;
