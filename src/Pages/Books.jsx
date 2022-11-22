import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import MultiActionAreaCard from "../Components/Book";

function Books() {
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState("");
  const [cost, setCost] = useState("");

  const user = localStorage.getItem("user") || null;

  useEffect(() => {
    let url1 = `https://librarybackendmasai.herokuapp.com/books?_sort=cost&_order=${cost}`
    let url2 = `https://librarybackendmasai.herokuapp.com/books?_sort=cost&_order=${cost}&genre=${genre}`
    let url3 = `https://librarybackendmasai.herokuapp.com/books?genre=${genre}`
    let url = ``;
    if( genre.length > 0 && cost.length >0){
       url = url2;
    }else if(genre.length > 0){
        url  = url3
    }else if(cost.length >0){
        url = url1;

    }else{
        url =`https://librarybackendmasai.herokuapp.com/books`
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [genre,cost]);

  if (!user) {
    return <Navigate to={"/usersignup"} />;
  }

  return (
    <>
      <Box mt={"50px"} display={"flex"}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            label="Genre"
            onChange={(e) => setGenre(e.target.value)}
          >
             <MenuItem value={""}>All</MenuItem>
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
            <MenuItem value={'asc'}>Low to High</MenuItem>
            <MenuItem value={'desc'}>High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3} justifyContent="center" padding="20px">
        {data.map((el) => (
          <Grid item>
            <MultiActionAreaCard data={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Books;
