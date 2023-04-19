import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'

import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Nav from '../components/Nav'
import { Search } from '@mui/icons-material'
import Searchbox from '../components/Searchbox'

const Chatpage = () => {
  return (
    <div>
     
      <Typography variant='h1' textAlign={'center'}
        color={"black"}
        >CHAT</Typography>
     


     <Stack  >
       <Box width="100%" sx={{display:"flex"}} >
       
       <Sidebar/>
        <Chat/>
    
        </Box>
      
     
      </Stack>
   
    </div>
  )
}

export default Chatpage
