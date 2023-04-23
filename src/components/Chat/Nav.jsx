import { Box, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <Box  border={"black"}>
        <Typography variant='h4' textAlign={"center"} color="white" sx={{backgroundColor: "#124C5F",maxHeight:"6rem",paddingTop:"2rem", borderRadius: "15px 15px 0px 0px"}}>DIRECT MESSAGES </Typography>
      </Box >
    </div>
  )
}

export default Nav
