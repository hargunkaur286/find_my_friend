import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Chatpage = () => {
  return (
    <div>
      <Box>
       <Box><Typography variant='h1' textAlign={'center'}
        color={"black"}
        >CHAT</Typography>
        </Box>
       
      
        <Box position={"relative"} component={"div"} sx={{
            color:"red",
            width:"100%",
            height:"100%",

    }}>
        <Box component="div" display={"flex"} style={{
            width: "100%",
            height: "40rem",
            backgroundColor:"#7f7f93"
        }}>

       {/* <Sidebar /> */}
       <Box sx={{
            flexGrow:1,
        }}>
        Sidebar
        </Box>
       <Box  sx={{
            flexGrow:2,
            
        }}
        
        style={{backgroundColor:"red"}}
        >
     Chat
        </Box>
       {/* <Chat/> */}
        </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Chatpage
