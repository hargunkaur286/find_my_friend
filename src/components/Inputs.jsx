import { Box, Button, FilledInput, FormControl, Stack, TextField, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'

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
      <Box style={{display:"flex",color:"white"}}>
    <TextField id="standard-basic"   placeholder='TYPE' type="search" sx={{width:"100%",borderRadius:"5%",border:"2px solid white ", padding:"1px"}}
 />
    
      
      {/* <SendIcon /> */}
       
      <Button variant="contained" sx={{marginRight:0,borderRadius:"15px",width:"10%",height:"10%",marginTop:"1rem"}} endIcon={<SendIcon />}>
        Send
      </Button>  
    
        
           
        </Box>
      
    
    </Box>
    
    </>
  )
}

export default Inputs
