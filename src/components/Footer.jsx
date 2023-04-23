import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Footer() {
  return (
    <>
    <Box sx={{marginTop: 10, paddingBottom: 5, paddingTop: 2, backgroundColor: '#C7E7E1'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Typography sx={{ fontSize: 14, paddingTop: 0.5, marginRight: 2}} color="text.secondary" gutterBottom>
          Get connected with us on Social Media!
      </Typography>
      <FacebookIcon sx={{color: 'gray'}} />
      <InstagramIcon sx={{color: 'gray'}} />
      <TwitterIcon sx={{color: 'gray'}} />
      <GitHubIcon sx={{color: 'gray'}} />
      </Box>

      <Box sx={{display: 'flex' ,justifyContent: 'center', marginTop: 2}}>
      <Typography sx={{ fontSize: 14, paddingTop: 2, marginRight: 2}} color="text.secondary" gutterBottom>
          Subscribe to our newsletter for regular updates
      </Typography>
      <TextField sx={{width: 300}} id="outlined-basic" label="Email" variant="outlined" />
      <Button variant="contained" sx={{backgroundColor: '#124C5F', marginLeft: 3}}>Send</Button>

      </Box>


    </Box>
    </>  
  )
}

export default Footer


