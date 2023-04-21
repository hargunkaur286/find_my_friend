import { Box, Button, FilledInput, FormControl, Stack, TextField, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React, { useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
const Inputs = () => {
   
      
      const [chat,setChat]=useState("")
      function handleClick(){
        console.log(chat)
      }
    return (
    <>
    <Box display={"flex"} justifyContent="space-between"  >
    
    
      <Box sx={{display:"flex",width:"100%",color:"white",bgcolor:"white",justifyContent:"space-between",margin:"2%",}}>
    <input  onChange={(e)=>{
      // console.log(e)
      setChat(e.target.value);
    }}
     id="standard-basic"   placeholder='TYPE' type="search"  style={{ width:"100%",
     marginTop: "2px",
     padding: "3%",
     borderRadius: "4%",
     border:"2px solid #124C5F"}}
    // sx={{
    //   margin: 0,
    //   // width: "100%",
    //   borderRadius: "4%",
    //   padding: "2%",
    //   margin: "2%",
    //   width: "inherit",}} 
   
              
    // }} sx={{width:"100%",borderRadius:"5%",border:"2px solid white ", padding:"1px",bgcolor:"white"}}
 />
    
      
      {/* <SendIcon /> */}
       
      <Button onClick={handleClick} sx={{marginRight:"2%",borderRadius:"2%",width:"0%",height:"10%",marginTop:"1rem"}} endIcon={<SendIcon style={{color:"#124C5F",fontSize:"3rem",textAlign:"center",margin:"auto"}}/>}>
        
      </Button>  
    
        
           
        </Box>
      
    
    </Box>
    
    </>
  )
}

export default Inputs
