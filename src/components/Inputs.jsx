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
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
      ];
      
      const [chat,setChat]=useState("")
      function handleClick(){
        console.log(chat)
      }
    return (
    <>
    <Box >
    
    {/* <SpeedDial
  ariaLabel="SpeedDial basic example"
  sx={{ position: 'absolute', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon fontSize={"small"} />}
>
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
    />
  ))}
</SpeedDial>
     */}
      <Box style={{display:"flex",color:"white",bgcolor:"white"}}>
    <input id="standard-basic"   placeholder='TYPE' type="search" maxWidth="70rem" 
    onChange={(e)=>{
      // console.log(e)
      setChat(e.target.value);
    
              
    }} sx={{width:"100%",borderRadius:"5%",border:"2px solid white ", padding:"1px",bgcolor:"white"}}
 />
    
      
      {/* <SendIcon /> */}
       
      <Button onClick={handleClick} sx={{marginRight:"2%",borderRadius:"10px",width:"10%",height:"10%",marginTop:"1rem",padding:"10"}} endIcon={<SendIcon />}>
        
      </Button>  
    
        
           
        </Box>
      
    
    </Box>
    
    </>
  )
}

export default Inputs
