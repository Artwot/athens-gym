import React from 'react';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';

// TODO: Pendiente buscar un logo para el diseño
import Logo from '../assets/images/Logo-2.png';

const Navbar = () => {
  return (
    // Navbar
    <Stack
      direction='row'
      alignItems='baseline'
      className='navbar'
      sx={{
        gap: { xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        pr: '20px',
        width: { xs: '90vw', sm: '50vw' },
        justifyContent: { xs: 'space-around', md: 'space-between' },
        paddingLeft: { md: '4rem' },
        paddingRight: { md: '4rem' },
      }}
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='Gym'
          style={{ width: '48px', height: '48px', margin: '0' }}
        />
      </Link>

      <Stack
        direction='row'
        gap='60px'
        fontSize='1.3rem'
        alignItems='flex-end'
        fontWeight='600'
      >
        <Link to='/' className='nav-links'>
          Inicio
        </Link>
        <a href='#exercises' className='nav-links'>
          {' '}
          Ejercicios
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
