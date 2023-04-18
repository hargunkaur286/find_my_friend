import React from 'react'
import Nav from './Nav'
import { Box } from '@mui/material'
import Searchbox from './Searchbox'

const Sidebar = () => {
  return (
    <div>
      <Box height={"2rem"}>
      <Nav/>
        <Searchbox/>
        
      </Box>
     



      
    
    </div>
  )
}

export default Sidebar
