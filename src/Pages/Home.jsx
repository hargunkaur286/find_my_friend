import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Cards from '../components/Cards'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Box sx={{background: 'white'}}>
      <Navbar/>
      <HeroBanner/>
      <Cards/>
      <Third />
      <Fourth />
    </Box>
  )
}

export default Home
