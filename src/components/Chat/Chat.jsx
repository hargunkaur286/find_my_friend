import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
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

      <Box sx={{ height:660, maxHeight:700,minWidth: "20rem", maxWidth: "80rem", backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', border: ' solid 5px #124C5F ', borderRadius: "1rem", bgcolor: "white" }}>
        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between',backgroundColor: "#124C5F", padding: "1rem", color: "white" }}>
          <Box  sx={{ display: "flex", alignItems: 'center',borderRadius:"5px"}}>
          <Avatar sx={{ bgcolor: deepOrange[500], marginRight: "1rem" }}>N</Avatar>
          <span>Nishtha</span>
          </Box>
          
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <CallIcon style={{
              width: "2rem",
              height: "auto",
              paddingRight: 10,
            }} />
            <VideoCallIcon style={{
              width: "2rem",
              height: "auto"
            }} />
          </Box>  
        </Box>
        <Messages />
      </Box>


    </>


  )
}

export default Chat
