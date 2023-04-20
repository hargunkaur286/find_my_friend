import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image1 from '../assets/service1.png';
import image2 from '../assets/service2.png';
import image3 from '../assets/service3.png';
import image4 from '../assets/service4.png';
import image5 from '../assets/service5.png';

// backgroundImage: 'linear-gradient(to bottom right, #FFF2B3, yellow)',
// backdropFilter: 'blur(7px)'
export default function BasicCard() {
  return (
    <>
    <Box>
    {/* <CardMedia image={sample}> */}
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
    <Card sx={{ marginTop: 2, width: 120, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'}}>
      <CardContent>
        <CardMedia component="img" height="" image={image1} alt=""/>
      </CardContent>
      <Typography variant="body2" component="div" textAlign="center">
            Grooming
       </Typography>
    </Card>
    <Card sx={{marginTop: 2, width: 120, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'}}>
    <CardContent>
      <CardMedia component="img" height="" image={image2} alt="" />
    </CardContent>
    <Typography variant="body2" component="div" textAlign="center">
          Healthcare
      </Typography>
  </Card>
  <Card sx={{ marginTop: 2, width: 120, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'}}>
    <CardContent>
      <CardMedia component="img" image={image3} alt="" />
    </CardContent>
    <Typography variant="body2" component="div" textAlign="center">
          Daycare
      </Typography>
  </Card>
  <Card sx={{ marginTop: 2, width: 120, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'}}>
    <CardContent>
      <CardMedia component="img" height="" image={image4} alt="" />
    </CardContent>
    <Typography variant="body2" component="div" textAlign="center">
          Training
      </Typography>
  </Card>
  <Card sx={{ marginTop: 2, width: 120, paddingLeft: 5, paddingRight: 5, paddingTop: 3, paddingBottom: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))'}}>
    <CardContent>
      <CardMedia component="img" height="" image={image5} alt="" />
      
    </CardContent>
    <Typography variant="body2" component="div" textAlign="center">
          Hygenic Care
      </Typography>
  </Card>
  </Box>
  {/* </CardMedia> */}
  </Box>

    </>
    
  );
}