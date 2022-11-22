
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router';
import MultiActionAreaCard from '../Components/Book';

function Books() {

    const [data,setData] = useState([]);
    const [genre, setGenre] = useState("");
    const [cost, setCost] = useState("");


    const user = localStorage.getItem("user") || null;




    useEffect(() => {
        fetch('http://localhost:3001/books').then(res=>res.json()).then(res=>setData(res))
       
       }, [])




    if(!user){
        return <Navigate to={"/usersignup"}/>
    }

  return (
    <>
    <Box>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Genre"
          onChange={(e) => setGenre(e.target.value)}
        >
          <MenuItem value={"Science"}>Science</MenuItem>
          <MenuItem value={"Fiction"}>Fiction</MenuItem>
          <MenuItem value={"History"}>History</MenuItem>
          <MenuItem value={"Tech"}>Tech</MenuItem>
          <MenuItem value={"Business"}>Business</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cost</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cost}
          label="Cost"
          onChange={(e) => setCost(e.target.value)}
        >
          <MenuItem value={0}>Low to High</MenuItem>
          <MenuItem value={1}>High to Low</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    <Grid container spacing={3} justifyContent="center" padding="20px">
        {data.map(el=><Grid item><MultiActionAreaCard data={el}/></Grid>)}

    </Grid>
    </>
  )
}

export default Books