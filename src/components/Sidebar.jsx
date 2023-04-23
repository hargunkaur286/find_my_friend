import React from 'react'
import Nav from './Nav'
import { Box } from '@mui/material'
import Searchbox from './Searchbox'

const Sidebar = () => {
  return (
    <Box >
      <Box sx={{ maxWidth:"30rem",}}>
      <Nav/>
        <Searchbox/>
    </Box>
    </Box>
  )
}

export default Sidebar
