import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyPartList, setBodyPartList] = useState([]);

  useEffect(() => {
    const bodyPartExercises = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
      const exercises = await fetchData(url, exerciseOptions);

      setBodyPartList(['all', ...exercises]);
    };

    bodyPartExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const url = 'https://exercisedb.p.rapidapi.com/exercises';
      const exercises = await fetchData(url, exerciseOptions);

      // Filter the search in every category
      const searchedExercises = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
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
          value={search}
          variant='outlined'
          onChange={(e) => setSearch(e.target.value)}
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
