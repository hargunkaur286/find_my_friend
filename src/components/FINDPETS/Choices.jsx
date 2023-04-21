import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Choices = () => {
 
    return (
    <Box marginLeft="2%">
      <AppBar position='static' sx={{backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px ', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)'
,marginTop:"1rem",textTransform:"capitalize",marginRight:"2%",borderRadius:"2rem",width:"96%"
}}>
    <Toolbar sx={{justifyContent:"space-evenly",}}>
       
      <Box sx={{ minWidth: 120, }}>
      {/* <Typography>FITERS</Typography> */}
      <FormControl textTransform="capitalize">
        <InputLabel variant="standard" htmlFor="uncontrolled-native" margin="2px">
          species
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'species',
            id: 'uncontrolled-native',
            
          }}
        >
          <option value={10}>Dog</option>
          <option value={20}>Cat</option>
          <option value={30}>Birds</option>
         
         
        </NativeSelect>
      </FormControl>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Breed
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Location
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <Button  sx={{borderRadius:"15px",width:{
        xs:"50",
        md:"100"
      },height:"10%",textSizeAdjust:"auto",color:"#124C5F"}} 
    > APPLY FILTERS
      </Button>  
    
     
    </Box>
    </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Choices
