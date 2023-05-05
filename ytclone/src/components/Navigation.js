import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from './utils/constants'
import SearchBar from './SearchBar'

const Navigation = () => {
  return (
    <Stack direction='row' alignItems='center' p='10px' px='10px' sx={{position:'sticky', backgroundColor:'#000', justifyContent:"space-between", top:'0px'}} >
      <Link to='/' style={{display:'flex',alignItem:'center'}}>
      <img src={logo} alt='logo' height={45} />
      <Typography align='center' variant='h5' color='white' marginLeft='10px' marginTop='5px'>YouTube</Typography >
      </Link>
      <SearchBar/>

    </Stack>
  )
}

export default Navigation
