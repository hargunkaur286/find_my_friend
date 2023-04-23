import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'

import React from 'react'
import Sidebar from '../components/Chat/Sidebar'
import Chat from '../components/Chat/Chat'
import Nav from '../components/Chat/Nav'
import { Search } from '@mui/icons-material'
import Searchbox from '../components/Chat/Searchbox'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Chatpage = () => {
  return (
    <div >
      <Box >
        <Navbar />
        <Typography variant="h4" component="h2" sx={{ textAlign: "center", paddingTop: 1 }}>
          Chat
        </Typography>
     
          <Box sx={{ display: "flex", justifyContent: "center",height:650}} >
            <Sidebar />
            <Chat />
          </Box>
      
      </Box>
      <Footer />
    </div>
  )
}

export default Chatpage
