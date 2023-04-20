import React from 'react'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import hero from '../assets/hero.svg'
import Card from '@mui/material/Card';

function HeroBanner() {
  return (
    <Box>
      <CardMedia 
      component="img"
      image={hero} 
      />
    </Box>
  )
}

export default HeroBanner;
