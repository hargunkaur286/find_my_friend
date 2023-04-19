import React from 'react'
import Nav from './Nav'
import { Box } from '@mui/material'
import Searchbox from './Searchbox'

const Sidebar = () => {
  return (
    <Box >

      <Box   height="auto"  sx={{backgroundColor: 'rgba(255, 255, 255, 0.4)',maxWidth:"30rem", boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', border: ' solid 10px #124C5F ',borderRadius:"2rem",backgroundImage: 'linear-gradient(to bottom right, #FFF2B3, yellow)',marginRight:{xs:"1rem",md:"2rem"}}}>
      <Nav/>
        <Searchbox/>
    </Box>
    </Box>
    
        
      
     



      
    
    
  )
}

export default Sidebar
