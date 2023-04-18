import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Message from './Messages';
import Messages from './Messages';
import Inputs from './Inputs';

const Chat = () => {
  return (
    <>
   <Box style={{backgroundColor:"inherit",height:"4rem",padding:"2rem"}}>
   <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
    <Avatar sx={{ bgcolor: deepOrange[500] ,marginRight:"1rem"}}>N</Avatar>
   <span>Nishtha</span>
    </Box>
   
   
  
   
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
   </Box>
   
   <Messages/>
   <Inputs/>
   
   
         
    </>
       
  
  )
}

export default Chat
