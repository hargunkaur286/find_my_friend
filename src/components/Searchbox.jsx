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
    <Box sx={{color:"white"}}>
    {/* <TextField id="outlined-search"  type="search" sx={{maxWidth:"70em"}} /> */}
    
    <Box style={{display:"flex"}}>
    <FormControl fullWidth sx={{ m: 0 }} variant="filled" >
        
        <FilledInput
          id="filled-adornment-amount"
          
          
        />
         </FormControl>
        <Box display={"flex"} style={{justifyContent:"flex-end"}}>  
<Stack direction="row" position={"absolute"} spacing={5} marginTop={"1rem"} marginRight={"1rem"}>

  <Search   style={{    width:"3rem",
    height: "auto"
}}/>

      
    </Stack>
    </Box> 
    </Box>
    
  {/* <Lists/> */}
     <Stack direction="column" spacing={2} > 
       <Box display={"flex"} >
      <Avatar>H</Avatar>
      <Typography variant='h4' sx={{color:"black" ,}}>Hari
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Typography variant='h4' sx={{color:"black" ,}}>Hari
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <Typography variant='h4' sx={{color:"black" ,}}>Hari
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <Typography variant='h4' sx={{color:"black" ,}}>Hari
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
      <Box display={"flex"} >
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <Typography variant='h4' sx={{color:"black" ,}}>Hari
      <Typography variant='h6' sx={{color:"gray" ,}}>okay,thank you.</Typography>
      </Typography>
      </Box>
 
     
    
     
    </Stack> 
    </Box>
    </>
   
  )
}

export default Searchbox