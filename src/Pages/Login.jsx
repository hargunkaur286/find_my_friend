import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer';

export default function BasicCard() {
  return (
    <>
    <Navbar />
    <Box sx={{display: 'flex', justifyContent: 'center', margin: 2, marginTop: 10, justifyItems: 'center'}}>
    <Card sx={{ minWidth: 500, maxWidth: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
      <CardContent>
        <Typography sx={{display: 'flex', textAlign: 'center'}} variant="h3" component="div">
          Login
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 2, marginBottom: 2}}>
        <TextField sx={{display: 'flex', marginTop: 2, marginBottom: 2, minWidth: 300}} id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        </Box>
        <Button variant="contained" sx={{backgroundColor: '#124C5F', minWidth: 300}}>Login</Button>

        <Box sx={{display: 'flex'}}>
        <Typography sx={{ fontSize: 14, paddingTop: 1.5}} color="text.secondary" gutterBottom>
          Don't have an account?
        </Typography>
        <CardActions>
        <Button size="small">Sign up Here</Button>
      </CardActions>
        </Box>
      </CardContent>
    </Card>
    </Box>
    <Footer />
    </>
  );
}