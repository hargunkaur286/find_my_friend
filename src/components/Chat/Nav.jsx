import { Box, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <Box margin={0} border={"black"}>
        <Typography variant='h5' textAlign={"center"} color="white" sx={{backgroundColor: "#124C5F",height:"6rem",paddingTop:"2rem", borderRadius: "15px 15px 0px 0px"}}>DIRECT MESSAGES </Typography>
      </Box >
    </div>
  )
}

export default Nav
