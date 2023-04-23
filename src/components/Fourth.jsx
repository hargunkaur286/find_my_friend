import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import review1 from '../assets/review1_crop.png'
import review2 from '../assets/review2_crop.png'
import review3 from '../assets/review3_crop.png'

export default function MultiActionAreaCard() {
  return (
    <>
    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
    <Card sx={{ maxWidth: 500 , margin: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          minHeight="250"
          maxHeight="500"
          sx={{background: '#DDCA69'}}
          image={review1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Anna & Tobby
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Amazing Products & Delivery on time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 500, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          minHeight="250"
          maxHeight="500"
          sx={{background: '#EBA8BF'}}
          image={review2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Christine & Tom
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Love the overall Shpping experience!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 500, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          minHeight='100'
          maxHeight="100"
          sx={{background: '#DDC7ED'}}
          image={review3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sindy & Kitch
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Kitch is love food from the pup-hub 
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </Box>
    
    </>
    
  );
}