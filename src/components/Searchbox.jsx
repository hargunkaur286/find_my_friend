import { Box, FilledInput, FormControl, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import {TextField} from '@mui/material'
import img from "../images/img1.jpg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Lists from './Lists';
import { Search } from '@mui/icons-material';

const Searchbox = () => {
  const [name,setName]=useState("")
  return (
    <>
    <Box sx={{width:"100%",bgcolor:"white",color:"#124C5F" ,border:"solid 5px",}}>
   
    
    
    <Box style={{display:"flex"}}>
    <input    onChange={(e)=>{
      // console.log(e)
      setName(e.target.value);}}  placeholder='SEARCH' type="search" style={{maxWidth:"70em",border:"2px solid #124C5F",padding:"3%"} } />
   
<Stack direction="row"  spacing={5} marginTop={"1rem"} marginRight={"1rem"}>

  <Search   sx={   {
      maxWidth:"3rem",
    height: "auto",
    color:"black",
    cursor:"pointer",
  color:"#124C5F"
  }}
  
   /> 

      
    </Stack>
    </Box> 
   
     <Stack direction="column" spacing={2} sx={{overflowY: "scroll",height:"100vh"}} > 
       <Box display={"flex"}sx={{width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)',borderRadius:"1rem", borderLeft: 'solid 2px rgb(128,128,128,0.3)', borderTop: 'solid 2px rgb(128,128,128,0.3)',padding:"1rem"}}   >
      <Avatar sx={{margin:"1rem" }}>H</Avatar>
      <Typography variant='h4' sx={{margin:"1rem"}}>Harry
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} sx={{width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)',borderRadius:"1rem", borderLeft: 'solid 2px rgb(128,128,128,0.3)', borderTop: 'solid 2px 	rgb(128,128,128,0.3) ',padding:"1rem"}}>
      <Avatar sx={{ bgcolor: deepOrange[500] ,margin:"1rem"}}>N</Avatar>
      <Typography variant='h4' sx={{margin:"1rem"}}>Neena
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} sx={{width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)',borderRadius:"1rem", borderLeft: 'solid 2px rgb(128,128,128,0.3)', borderTop: 'solid 2px rgb(128,128,128,0.3) ',padding:"1rem"}} >
      <Avatar sx={{ bgcolor: "red",margin:"1rem" }}>P</Avatar>
      <Typography variant='h4' sx={{margin:"1rem"}}>Param
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} sx={{width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)',borderRadius:"1rem", borderLeft: 'solid 2px rgb(128,128,128,0.3)', borderTop: 'solid 2px rgb(128,128,128,0.3) ',padding:"1rem"}} >
      <Avatar sx={{ bgcolor: "purple" ,margin:"1rem"}}>S</Avatar>
      <Typography variant='h4' sx={{margin:"1rem"}}>Sam
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} sx={{width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)',borderRadius:"1rem", borderLeft: 'solid 2px rgb(128,128,128,0.3)', borderTop: 'solid 2px rgb(128,128,128,0.3)',padding:"1rem"}} >
      <Avatar sx={{ bgcolor: deepPurple[500],margin:"1rem" }}>T</Avatar>
      <Typography variant='h4' sx={{margin:"1rem",}}>Tarun
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
 
     
    
     
    </Stack> 
    </Box>
    </>
   
  )
}

export default Searchbox
