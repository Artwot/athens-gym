import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const SearchExercises = () => {
  const [searchedExercise, setSearchedExercise] = useState('');

  const handleSearch = () => {
    console.log('Se hizo click');
  };

  return (
    <Stack
      justifyContent='center'
      alignItems={'center'}
      sx={{
        padding: { xs: '4rem 2rem', md: '8rem 4rem ' },
      }}
    >
      <Typography
        fontWeight={'bold'}
        textAlign='center'
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          marginBottom: { xs: '3rem' },
        }}
      >
        Entrena con los mejores ejercicios
      </Typography>

      {/* Search Input */}
      <Box
        position='relative'
        maxHeight='76px'
        sx={{
          width: { xs: '75%', md: '80%' },
          borderRadius: '1rem',
          overflow: 'hidden',
        }}
        className='TextField-without-border-radius'
      >
        <TextField
          placeholder='Buscar ejercicios'
          type='text'
          className='text-field'
          value={searchedExercise}
          variant='outlined'
          onChange={(e) => setSearchedExercise(e.target.value)}
          sx={{ width: '75%', outline: 'none' }}
        />
        <Button
          position='absolute'
          onClick={handleSearch}
          sx={{
            backgroundColor: '#111111',
            color: 'white',
            borderRadius: '0',
            height: '56px',
            width: '25%',
            ':hover': {
              bgcolor: '#757575',
            },
          }}
        >
          Buscar
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
