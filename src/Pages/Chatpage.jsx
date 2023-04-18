import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Nav from '../components/Nav'
import { Search } from '@mui/icons-material'
import Searchbox from '../components/Searchbox'

const Chatpage = () => {
  return (
    <div>
      <Box >
       <Box><Typography variant='h1' textAlign={'center'}
        color={"black"}
        >CHAT</Typography>
        </Box>
       
      
        <Box position={"relative"} component={"div"} sx={{
            color:"white",
            width:"100%",
            height:"100%",

    }}>
        <Box component="div" display={"flex"} style={{
            width: "100%",
            height: "80rem",
            backgroundColor:"#7f7f93"
        }}>

       {/* <Sidebar /> */}
       <Box sx={{
            flexGrow:1,
        }} style={{backgroundColor:"#C7E7E1",
        }} >
        <Sidebar/>
        </Box>
        {/* chat */}
       <Box  sx={{
            flexGrow:1.5,
            
        }}
        
        style={{backgroundColor:"#75756c",
       
        }}
        >
     <Chat/>
        </Box>
       {/* <Chat/> */}
        </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Chatpage
