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
   
     <Box sx={{height:"auto",minWidth:"20rem",maxWidth:"80rem",backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)',  border: ' solid 10px #124C5F ',borderRadius:"2rem",bgcolor:"white"}}>

  
   
   
   <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start", margin:"1rem",backgroundColor:"#124C5F",padding:"1rem",color:"white"}}>
   <Avatar sx={{ bgcolor: deepOrange[500] ,marginRight:"1rem"}}>N</Avatar>
   <span>Nishtha</span>
    </Box>



   

    <Box display={"flex"} style={{justifyContent:"flex-end",color:"white",alignItems:"start"}}>  
<Stack direction="row" position={"absolute"} spacing={5} marginTop={"-5rem"} marginRight={"2rem"}>
<CallIcon style={{    width:"2rem",
    height: "auto"
}}/>
<VideoCallIcon  style={{    width:"2rem",
    height: "auto"
}} />
</Stack>
 
   </Box>
   <Messages/>
   </Box>
  
   
   
  
   

   
   
  

   
   
         
    </>
       
  
  )
}

export default Chat
