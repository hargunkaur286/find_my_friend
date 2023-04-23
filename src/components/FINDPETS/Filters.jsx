import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'

import Choices from './Choices'

const Filters = () => {
  return (
  <>
  <Box>
  <Typography variant="h4" component="h2" sx={{textAlign: "center", paddingTop: 1}}>
        Find Pets
      </Typography>
    <Choices/>
    
    
    </Box>

  </>
      
  
  )
}

export default Filters
