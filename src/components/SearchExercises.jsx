import React from 'react';
import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';

import { createTheme } from '@mui/material/styles';
import { width } from '@mui/system';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#000',
      darker: '#000',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const SearchExercises = () => {
  return (
    <Stack
      justifyContent='center'
      alignItems={'center'}
      sx={{
        padding: { xs: '4rem 2rem', md: '6rem 4rem ' },
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
          value=''
          variant='outlined'
          onChange={(e) => {
            console.log(e.target.value);
          }}
          sx={{ width: '75%' }}
        />
        <Button
          position='absolute'
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
