import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import '../App.css';

import HeroBannerImage from '../assets/images/sushil-ghimire-5UbIqV58CW8-unsplash.jpeg';

const HeroBanner = () => {
  return (
    // Hero Banner Container
    <Grid
      container
      position='relative'
      p='1.2rem'
      display='flex'
      sx={{
        padding: { xs: '0 2rem', md: '0 4rem' },
        width: '100vw',
        height: {
          xs: 'calc(100vh - 55px)',
          sm: 'calc(100vh - 52px)',
          lg: 'calc(100vh - 88px)',
        },
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      {/* Banner content */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        lg={6}
        display='flex'
        flexDirection={'column'}
        justifyContent='center'
        alignItems={'flex-start'}
        className='banner-content'
        sx={{
          paddingTop: { xs: '2rem', sm: '0' },
          paddingBottom: { xs: '3.5rem', sm: '0' },
          width: { md: '50vw' },
          justifyContent: { xs: 'flex-end', md: 'center' },
        }}
      >
        {/* Title */}
        <Typography fontSize='18px' fontWeight='600' color='#FF6931' mb={2}>
          Club de Fitness
        </Typography>

        {/* Main Description */}
        <Typography
          fontSize='4rem'
          fontWeight='600'
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            lineHeight: { xs: '2rem', sm: '4rem', md: '4.3rem' },
            maxWidth: 'max-content',
            marginBottom: { xs: '3rem', md: '7rem' },
            color: { xs: 'white', md: '#14213D' },
          }}
        >
          Obtén un cuerpo saludable con los ejercicios perfectos
        </Typography>
        <Button
          variant='contained'
          sx={{
            padding: '0.8rem 1.6rem',
            borderRadius: '2rem',
            background: { xs: 'white', md: '#111111' },
            color: { xs: '#111111', md: 'white' },
            transition: 'all linear .3s',

            ':hover': {
              backgroundColor: '#757575',
              color: 'white',
            },
            fontWeight: 'bold',
          }}
        >
          Explorar ejercicios
        </Button>
      </Grid>

      {/* Banner Image */}
      <Grid
        container
        position='absolute'
        right='0'
        height='100vh'
        item
        lg={6}
        sx={{
          // display: { xs: 'none', md: 'block' },
          width: { xs: '100vw', md: '50vw' },
          height: { xs: '100vh' },
          zIndex: { xs: '-1', md: '0' },
          top: { xs: '-73px', md: '-85px' },
          backgroundImage: `url(${HeroBannerImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
    </Grid>
  );
};

export default HeroBanner;
