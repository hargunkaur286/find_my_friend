import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'

import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Nav from '../components/Nav'
import { Search } from '@mui/icons-material'
import Searchbox from '../components/Searchbox'

const Chatpage = () => {
  return (
    <div >
     <Box sx={{background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'}}>
      <Typography variant='h1' textAlign={'center'}
        color={"black"}
        >CHAT</Typography>
     


     <Stack  >
       <Box width="100%" sx={{display:"flex",justifyContent:"center"}} >
       
       <Sidebar/>
        <Chat/>
    
        </Box>
      
     
      </Stack>
      </Box>
    </div>
  )
}

export default Chatpage
