import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import sample from '../assets/sample.jpeg';
import pet1 from '../assets/pet1.jpeg';
import pet2 from '../assets/pet2.jpeg';
import pet3 from '../assets/pet3.jpeg';
import pet4 from '../assets/pet4.jpeg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Footer from '../components/Footer';

const Profile = () => {
const theme = useTheme();
const [userName,setUserName]=useState("")
const [userEmail,setUserEmail]=useState("")
const [disable,setDisable]=useState(true)

const handleEdit=()=>{
  setDisable(!disable)
  }
  const handleSave=()=>{
   
    // console.log(userEmail , userName)
    localStorage.setItem("name" , userName);
    localStorage.setItem("email" , userEmail);
    setDisable(true)
    
  }

  useEffect(()=>{
setUserName(localStorage.getItem("name"))
setUserEmail(localStorage.getItem("email"))
  },[])
  
return ( <>
    <Box>
      <Navbar/>
      <Typography variant="h4" component="h2" sx={{textAlign: "center", paddingTop: 1}}>
        Profile Page
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Card sx={{ display: 'flex', alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', margin: 2, width: 1500,display: 'flex', justifyContent: 'center'}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150, borderRadius: '100%'}}
        image={pet4}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{flex: '1 0 auto',alignItems:"center"}}>
          <Typography component="div" variant="h5">
            Profile Info
          </Typography>
          <input id="name"  disabled={disable===true} value={userName} variant="standard"
          style={{margin: 5, padding: 3, width: 200}}
          onChange={(e)=>{
           setUserName(e.target.value)
           
  }}
          />
          <div>
          <input id="email"  disabled={disable===true} value={userEmail} variant="standard" 
          style={{margin: 5, padding: 2, width: 200}}
          onChange={(e)=>{setUserEmail(e.target.value)

          }}
          />
          </div>
          <Button variant="contained" sx={{backgroundColor: '#124C5F', marginTop: 2, marginLeft: 2 }} onClick={handleEdit}>Edit</Button>
          <Button variant="contained" sx={{backgroundColor: '#124C5F', marginTop: 2, marginLeft: 2 }} onClick={handleSave}>Save</Button>
        </CardContent>
      </Box>
    </Card>
    </Box>

    <Card sx={{ display: 'flex', padding: 2, borderRadius: 50, alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', margin: 2}}>
      <CardMedia
        component="img"
        sx={{ width: 50, height: 50, borderRadius: '50%'}}
        image={pet1}
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
        image={pet2}
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
        image={pet3}
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
    <Footer />
    </>
  )
}

export default Profile
