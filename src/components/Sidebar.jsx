import React from 'react'
import Nav from './Nav'
import { Box } from '@mui/material'

const Sidebar = () => {
  return (
    <div>
        <Box sx={{
            flexGrow:1,
            backgroundColor:"red"
        }}  style={{  backgroundColor:"red"}}>
        Sidebar
        </Box>
    
    </div>
  )
}

export default Sidebar
