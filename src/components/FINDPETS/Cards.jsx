import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import pet1 from "../../images/pet1.jpg"
import pet2 from "../../images/pet2.jpg"
import { Stack } from '@mui/material';

const Cards = () => {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius:"50%"
      });
      const PaperStyle={
        p: 2,
        margin:"2% 3%" ,
        maxWidth:"90%" ,
        width:{
            md:"100%"
        },
        flexGrow: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',borderRadius:"2rem"
      }
  
    return (
    <div>
    
    <Stack marginTop={"20rem"} marginLeft={"20px"} >

    <Paper
      sx={PaperStyle}> ,
       
    
      <Grid container spacing={4}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={pet1} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
              About
              </Typography>
              <Typography variant="body2" color="text.secondary">
             Location
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                ADD
              </Typography>
            </Grid> */}
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
    <Paper
      sx={PaperStyle}> ,
    
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={pet2} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
              About
              </Typography>
              <Typography variant="body2" color="text.secondary">
             Location
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                ADD
              </Typography>
            </Grid> */}
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1" component="div">
            REMOVE
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
    </Stack>

    


    </div>
  )
}

export default Cards
