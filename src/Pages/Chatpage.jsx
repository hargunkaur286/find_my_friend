import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'

import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Nav from '../components/Nav'
import { Search } from '@mui/icons-material'
import Searchbox from '../components/Searchbox'
import Navbar from '../components/Navbar'

const Chatpage = () => {
  return (
    <div >
     <Box >
      <Navbar/>
      <Typography variant='h1' textAlign={'center'}
        color={"black"}
        >CHAT</Typography>
     


     <Stack  >
       <Box width="100%"  sx={{display:"flex",justifyContent:"center",}} >
       
       <Sidebar/>
        <Chat/>
        
    
        </Box>
      
     
      </Stack>
      </Box>
    </div>
  )
}

export default Chatpage
