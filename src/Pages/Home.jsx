import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box>
       <Link to={
            "/usersignup"
        }> <Button><img width={"200"} src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/></Button></Link>
         <Link to={"/admin"}><Button><img width={"200"} src="https://as1.ftcdn.net/v2/jpg/00/07/32/48/1000_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg"/></Button></Link>
        
    </Box>
  )
}

export default Home