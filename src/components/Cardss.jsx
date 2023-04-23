import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import sample from '../assets/sample.jpeg';
import {Stack} from '@mui/material'
const Cardss = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems="center">
      
       <Card sx={{ width:"50%",display: 'flex',flexWrap:"wrap",justifyContent:"center", padding: 2, borderRadius: 50, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',margin:2}}>
     
      <Stack direction={{md:"row"}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, borderRadius: '50%'}}
        image={sample}
        alt="Live from space album cover"
      />
   
        <CardContent sx={{display:"flex" ,}}>
        <Box  >
        <Typography display="flex" component="div" variant="h5" marginRight="2rem" >
        Name 
        <Box marginLeft="1rem">
        gggggggggggggggggggg
        </Box>
          </Typography>
          <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
            Age
          </Typography>
          <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
            Species
          </Typography>
        </Box>
         <Box >
         <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
            Breed
          </Typography>
          <Box>
          <Typography variant="subtitle1"aria-label='liking' color="text.secondary" component="div">
       Liking
          </Typography>
          <Typography variant="subtitle1"aria-label='disliking' color="text.secondary" component="div">
        Disliking
          </Typography>

         </Box>
        
          </Box>
         
        </CardContent>



        
        </Stack>
    </Card>


    <Card sx={{ width:"50%", display: 'flex',flexWrap:"wrap",justifyContent:"center", padding: 2, borderRadius: 50, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',margin:2}}>
     
     <Stack direction={{md:"row"}}>
     <CardMedia
       component="img"
       sx={{ width: 150, height: 150, borderRadius: '50%'}}
       image={sample}
       alt="Live from space album cover"
     />
  
       <CardContent sx={{display:"flex" }}>
       <Box  >
       <Typography display="flex" component="div" variant="h5" marginRight="2rem" >
       Name 
       <Box marginLeft="1rem">
       gggggggggggggggggggg
       </Box>
         </Typography>
         <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
           Age
         </Typography>
         <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
           Species
         </Typography>
       </Box>
        <Box >
        <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
           Breed
         </Typography>
         <Box>
         <Typography variant="subtitle1"aria-label='liking' color="text.secondary" component="div">
      Liking
         </Typography>
         <Typography variant="subtitle1"aria-label='disliking' color="text.secondary" component="div">
       Disliking
         </Typography>

        </Box>
       
         </Box>
        
       </CardContent>



       
       </Stack>
   </Card>


   <Card sx={{  width:"50%",justifyItems:"center",display: 'flex',flexWrap:"wrap",justifyContent:"center", padding: 2, borderRadius: 50, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',margin:2}}>
     
      <Stack direction={{md:"row"}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, borderRadius: '50%'}}
        image={sample}
        alt="Live from space album cover"
      />
   
        <CardContent sx={{display:"flex", }}>
        <Box  >
        <Typography display="flex" component="div" variant="h5" marginRight="2rem" >
        Name 
        <Box marginLeft="1rem">
        gggggggggggggggggggg
        </Box>
          </Typography>
          <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
            Age
          </Typography>
          <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
            Species
          </Typography>
        </Box>
         <Box >
         <Typography variant="subtitle1"aria-label='bio' color="text.secondary" component="div">
            Breed
          </Typography>
          <Box>
          <Typography variant="subtitle1"aria-label='liking' color="text.secondary" component="div">
       Liking
          </Typography>
          <Typography variant="subtitle1"aria-label='disliking' color="text.secondary" component="div">
        Disliking
          </Typography>

         </Box>
        
          </Box>
         
        </CardContent>



        
        </Stack>
    </Card>




   


   </Box>
   
  )
}

export default Cardss
