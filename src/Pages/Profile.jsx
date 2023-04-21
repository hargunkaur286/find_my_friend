import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import sample from '../assets/sample.jpeg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Profile = () => {
const theme = useTheme();
const [email,setEmail]=useState("")
const [name,setName]=useState("")
const handleClick=()=>{
  document.getElementById("email").innerHTML=`<h1>${email}</h1>`
  document.getElementById("name").innerHTML=name
}
const handleDel=()=>{
  document.getElementById("email").innerHTML=""
  document.getElementById("name").innerHTML=""
  setName("")
  setEmail("")
}
  return (
    <>
    <Box>
      <Navbar/>
      <Typography variant="h4" component="h2" sx={{textAlign: "center", paddingTop: 1}}>
        Profile Page
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Card sx={{ display: 'flex', alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', margin: 2, width: 1500}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, borderRadius: '100%'}}
        image={sample}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{flex: '1 0 auto',alignItems:"center"}}>
          <Typography component="div" variant="h5">
            Profile Info
          </Typography>
          <input id="name" label="Name" variant="standard"
          onChange={(e)=>{
            console.log(e)
            console.log(e.target.value)
            setName(e.target.value)
 
           }}
          />
          <div>
          <input id="email" label="Email" variant="standard" 
          onChange={(e)=>{
           console.log(e)
           console.log(e.target.value)
           setEmail(e.target.value)

          }}
          />
          </div>
          <Button variant="contained" sx={{backgroundColor: '#124C5F', marginTop: 2, marginLeft: 2 }} onClick={handleDel}>Edit</Button>
          <Button variant="contained" sx={{backgroundColor: '#124C5F', marginTop: 2, marginLeft: 2 }} onClick={handleClick}>Save</Button>
        </CardContent>
      </Box>
    </Card>
    </Box>

    <Card sx={{ display: 'flex', padding: 2, borderRadius: 50, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', margin: 2}}>
      <CardMedia
        component="img"
        sx={{ width: 50, height: 50, borderRadius: '50%'}}
        image={sample}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Pet 1
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>
        </CardContent>
      </Box>
    </Card>

    <Card sx={{ display: 'flex', padding: 2, borderRadius: 50, alignItems: 'center',backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', margin: 2}}>
    <CardMedia
        component="img"
        sx={{ width: 50, height: 50, borderRadius: '50%'}}
        image={sample}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' ,display: 'flex', justifyContent: 'right'}}>
        <CardContent sx={{ flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
            Pet 2
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>
        </CardContent>
      </Box>
    </Card>    

    <Card sx={{ display: 'flex', padding: 2, borderRadius: 50, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', margin: 2}}>
      <CardMedia
        component="img"
        sx={{ width: 50, height: 50, borderRadius: '50%'}}
        image={sample}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Pet 3
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Typography>
        </CardContent>
      </Box>
    </Card>
    </Box>
    </>
  )
}

export default Profile
