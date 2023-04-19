import { Box, FilledInput, FormControl, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import {TextField} from '@mui/material'
import img from "../images/img1.jpg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Lists from './Lists';
import { Search } from '@mui/icons-material';

const Searchbox = () => {
  return (
    <>
    <Box sx={{color:"white",width:"100%"}}>
   
    
    
    <Box style={{display:"flex"}}>
    <TextField id="outlined-search"   placeholder='SEARCH' type="search" sx={{maxWidth:"70em",border:"2px solid"} } />
   
<Stack direction="row"  spacing={5} marginTop={"1rem"} marginRight={"1rem"}>

  <Search   style={{    width:"3rem",
    height: "auto"
}}/>

      
    </Stack>
    </Box> 
   
     <Stack direction="column" spacing={2} sx={{overflowY: "hidden"}} > 
       <Box display={"flex"}  >
      <Avatar sx={{margin:"1rem"}}>H</Avatar>
      <Typography variant='h4' sx={{color:"black" ,margin:"1rem"}}>Harry
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: deepOrange[500] ,margin:"1rem"}}>N</Avatar>
      <Typography variant='h4' sx={{color:"black" ,margin:"1rem"}}>Neena
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: "red",margin:"1rem" }}>P</Avatar>
      <Typography variant='h4' sx={{color:"black" ,margin:"1rem"}}>Param
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: "purple" ,margin:"1rem"}}>S</Avatar>
      <Typography variant='h4' sx={{color:"black" ,margin:"1rem"}}>Sam
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: deepPurple[500],margin:"1rem" }}>T</Avatar>
      <Typography variant='h4' sx={{color:"black" ,margin:"1rem"}}>Tarun
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
 
     
    
     
    </Stack> 
    </Box>
    </>
   
  )
}

export default Searchbox
