import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Message from './Messages';
import Messages from './Messages';

const Chat = () => {
  return (
    <>
   <Typography variant="h2"style={{backgroundColor:"black"}}>
   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
  
   
<Box display={"flex"} style={{justifyContent:"flex-end"}}>  
<Stack direction="row" position={"absolute"} spacing={5} marginTop={"-3rem"} marginRight={"1rem"}>
<CallIcon style={{    width:"2rem",
    height: "auto"
}}/>
<VideoCallIcon  style={{    width:"2rem",
    height: "auto"
}} />
</Stack>

   </Box>
   <Messages/>
   
   </Typography>
         
    </>
       
  
  )
}

export default Chat
