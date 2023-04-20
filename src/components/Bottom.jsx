import React from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Bottom = () => {
  return (
    <div>
    
      <Stack spacing={2}direction={"flex"}justifyContent={"center"} >
        <Pagination
          count={10}
        
          renderItem={(item) => (
            <PaginationItem
            sx={{textAlign:"center"}}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  )
}

export default Bottom
