import React from 'react'
import Nav from '../components/Chat/Nav'
import { Filter } from '@mui/icons-material'
import Filters from '../components/FINDPETS/Filters'

import Bottom from '../components/Chat/Bottom'
import { Box } from '@mui/material'

import Cardss from '../components/FINDPETS/Cardss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Find = () => {
  
  // {backgroundImage: 'linear-gradient(to bottom right, #FFF2B3, gray)',margin:0
  return (
    <>
    <Box>
      <Navbar/>
      <Filters/>
      {/* <Cards/> */}
<Cardss/>      
      <footer>
         <Bottom/>
      </footer>
    </Box>
    <Footer />
    </>
    
  )
}

export default Find
