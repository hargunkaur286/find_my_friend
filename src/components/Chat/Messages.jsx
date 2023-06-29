import { Typography ,Box, Avatar} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { useState } from 'react'
import Inputs from './Inputs'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
</style>


const Messages = () => {
  const LeftTextstyle={
width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)',borderRadius:"2rem", borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 2px rgba(255, 255, 255, 0.8)',backgroundImage: 'linear-gradient(to bottom right, #FFF2B3, green),',padding:"1rem"
}
const RightTextstyle={marginLeft:{xs:"10rem",md:"40rem"},
width:"fit-content",backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)',borderRadius:"2rem", borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 2px rgba(255, 255, 255, 0.8)',backgroundImage: 'linear-gradient(to bottom right, #FFF2B3, green),',padding:"1rem"
}

  return (

   
<>
    <Box  >
       <Box   sx={{maxHeight:500,overflowY: "scroll",fontFamily:"'Roboto', 'sans-serif'",fontSize:"1rem",maxWidth:"100%",bgcolor:"white"}}>
        
         <Box sx={LeftTextstyle}
         >Hi,How are you?</Box>
      <Box component="div" sx={RightTextstyle}>
      Hi,Iam Fine.
          </Box>
         
          <Box sx={LeftTextstyle}>Hi,How are you?</Box>
      <Box component="div" sx={RightTextstyle}>
      Hi,Iam Fine.
          </Box>
          <Box sx={LeftTextstyle}>Hi,How are you?</Box>
      <Box component="div" sx={RightTextstyle}>
      Hi,Iam Fine.
          </Box>
          <Box sx={LeftTextstyle}>Hi,How are you?</Box>
      <Box component="div" sx={RightTextstyle}>
      Hi,Iam Fine.
          </Box>
          <Box sx={LeftTextstyle}>Hi,How are you?</Box>
      <Box component="div" sx={RightTextstyle}>
      Hi,Iam Fine.
          </Box>
          <Box sx={LeftTextstyle}>Hi,How are you?</Box>
      <Box component="div" sx={RightTextstyle}>
      Hi,Iam Fine.
          </Box>
          
        
         
       </Box>
         <Inputs/> 
       </Box>

    
    
    </>
  )
}

export default Messages
