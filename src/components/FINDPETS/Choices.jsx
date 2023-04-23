import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Choices = () => {
  const [species, setSpecies] = useState("30")
  const [breed, setBreed] = useState("30")
  const [loc, setLoc] = useState("30")
  const [age, setAge] = useState("30")
  const handleSpecies = (e) => {
    setSpecies(e.target.value)

  }
  const handleBreed = (e) => {
    setBreed(e.target.value)

  }
  const handleLoc = (e) => {
    setLoc(e.target.value)

  }
  const handleAge = (e) => {
    setAge(e.target.value)

  }
  useEffect(() => {
    console.log(species, loc, breed, age)

  }, [species, loc, breed, age])






  return (
    <Box marginLeft="2%">
      <AppBar position='static' sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px ', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)'
        , marginTop: "1rem", textTransform: "capitalize", marginRight: "2%", borderRadius: "2rem", width: "96%"
      }}>
        <Toolbar sx={{ justifyContent: "space-evenly", }}>

          <Box sx={{ minWidth: 120 }}>
            {/* <Typography>FITERS</Typography> */}
              <FormControl sx={{marginRight: 2}} textTransform="capitalize">
                <InputLabel variant="standard" htmlFor="uncontrolled-native" margin="5px"  >
                  species
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  value={species}
                  onChange={handleSpecies}
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

              <FormControl sx={{marginRight: 2}} >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Breed
                </InputLabel>
                {species === "10" &&
                  <NativeSelect
                    defaultValue={30}
                    value={breed}
                    onChange={handleBreed}
                    inputProps={{
                      name: 'breed',
                      id: 'uncontrolled-native',
                    }}
                  >

                    <option value={10}>Boxer</option>
                    <option value={20}>German Shephard</option>
                    <option value={30}>Labrador Retriever</option>
                  </NativeSelect>}

                {species === "30" &&
                  <NativeSelect
                    defaultValue={30}
                    value={breed}
                    onChange={handleBreed}
                    inputProps={{
                      name: 'breed',
                      id: 'uncontrolled-native',
                    }}
                  >

                    <option value={10}>Amazon Parrot</option>
                    <option value={20}>Alexandrine Parakeet</option>
                    <option value={30}>Canary</option>
                  </NativeSelect>}
                {species === "20" &&
                  <NativeSelect
                    defaultValue={30}
                    value={breed}
                    onChange={handleBreed}
                    inputProps={{
                      name: 'breed',
                      id: 'uncontrolled-native',
                    }}
                  >

                    <option value={10}>Himalayan Cat</option>
                    <option value={20}> Persian Cats</option>
                    <option value={30}>The American Bobtail</option>
                  </NativeSelect>}
              </FormControl>

              <FormControl sx={{marginRight: 2}} >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Location
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  value={loc}
                  onChange={handleLoc}
                  inputProps={{
                    name: 'location',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Delhi</option>
                  <option value={20}>Mumbai</option>
                  <option value={30}>Bangalore</option>
                  <option value={40}>Kolkata</option>
                </NativeSelect>
              </FormControl>

              <FormControl >
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect

                  value={age}
                  onChange={handleAge}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Between 1-5</option>
                  <option value={20}>Between 5-10</option>
                  <option value={30}>More than 10</option>
                </NativeSelect>
              </FormControl>



            {/* breed */}

            {/* //Location */}


            {/* age */}

            <Button sx={{
              borderRadius: "15px", width: {
                xs: "50",
                md: "100"
              }, height: "10%", textSizeAdjust: "auto", color: "#124C5F"
            }}
              onClick={(e) => {
                console.log(`species:${species} breed:${breed} age:${age} location:${loc}`)
              }}
            > APPLY FILTERS
            </Button>


          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Choices
