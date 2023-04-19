import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'
import Choices from './Choices'

const Filters = () => {
  return (
  <>
  <Box>
        <Typography variant='h1' textAlign={"center"} >FIND MY PETS</Typography>
    <Choices/>
    
    
    </Box>

  </>
      
  
  )
}

export default Filters
