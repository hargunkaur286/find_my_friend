import { Box, Button, FilledInput, FormControl, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
const Inputs = () => {
   
      
      const [chat,setChat]=useState("")
      function handleClick(){
        console.log(chat)
      }
    return (
    <>
    <Box display={"flex"} justifyItems="space-around"  >
      <Box sx={{display:"flex",width:"100%",color:"white",bgcolor:"white",marginBottom:0}}>
    <input  onChange={(e)=>{
      // console.log(e)
      setChat(e.target.value);
    }}
     id="standard-basic"   placeholder='TYPE' type="search"  style={{ width:"100%",
     padding: "3%",
     borderRadius: "4%",
     border:"2px solid #124C5F"}}
 />       
      <Button onClick={handleClick} sx={{marginRight:"2%",borderRadius:"2%",width:"0%"}} endIcon={<SendIcon style={{color:"#124C5F",fontSize:"3rem",textAlign:"center",margin:"auto"}}/>}>
        
      </Button>  
    
        
           
        </Box>
      
    
    </Box>
    
    </>
  )
}

export default Inputs
