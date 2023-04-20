import React from 'react'
import Nav from '../components/Nav'
import { Filter } from '@mui/icons-material'
import Filters from '../components/FINDPETS/Filters'
import Cards from '../components/FINDPETS/Cards'
import Bottom from '../components/Bottom'
import { Box } from '@mui/material'


const Find = () => {
  
  // {backgroundImage: 'linear-gradient(to bottom right, #FFF2B3, gray)',margin:0
  return (
    <Box sx={{background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'}}>
      <Filters/>
      <Cards/>
      <footer>
         <Bottom/>
      </footer>
    </Box>
  )
}

export default Find
