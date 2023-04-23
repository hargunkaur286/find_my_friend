import React from 'react'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dog from '../assets/third.png'
import dogman from '../assets/dogman.svg'

function Third() {
  return (
    <>
    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <CardMedia
        component="img"
        image={dog}
        sx={{minHeight: 100, maxHeight: 700, minWidth: 100, maxWidth: 500}}
        />
    <Card 
    sx={{minWidth: 100, maxWidth: 600, height: 300, margin: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', padding: 5}}>
        <Typography variant="h4"
        sx={{fontFamily: 'comic-sans', fontStyle: 'normal', marginBottom: 5}}>
            Dogs do speak, but only to those who know how to listen!</Typography>
        <Typography>Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding biscuit caramels topb</Typography>
        <Button variant="contained" sx={{backgroundColor: '#124C5F', marginTop: 5}}>Explore More</Button>
    </Card>
    </Box>

    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
    <Card 
    sx={{minWidth: 100, maxWidth: 600, height: 300, margin: 3, backgroundColor: 'rgba(255, 255, 255, 0.4)', boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.1)', borderLeft: 'solid 1px rgba(255, 255, 255, 0.3)', borderTop: 'solid 1px rgba(255, 255, 255, 0.8)', backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', padding: 5}}>
        <Typography variant="h4"
        sx={{fontFamily: 'comic-sans', fontStyle: 'normal', marginBottom: 5}}>
No one appreciates the very special genius of your conversation as the dog does.</Typography>   <Typography>Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream.biscuit caramels topb
</Typography>
        <Button variant="contained" sx={{backgroundColor: '#124C5F', marginTop: 5}}>Explore More</Button>
    </Card>
    <CardMedia
        component="img"
        image={dogman}
        sx={{minHeight: 100, maxHeight: 500, minWidth: 100, maxWidth: 300}}
        />
    </Box>
    </>
    
  )
}

export default Third
