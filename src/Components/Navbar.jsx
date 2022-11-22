import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box padding={4} bgcolor="teal" display={"flex"} gap="20px" fontSize={"25px"} >
        <Link to={"/"}>Home</Link>
        <Link to={"/user"}>User</Link>
        <Link to={"/admin"}>Admin</Link>
    </Box>
  )
}

export default Navbar