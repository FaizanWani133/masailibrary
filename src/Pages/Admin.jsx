import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import BasicTable from "../Components/BooksTable";
import FormDialog from "./AdminForm";

function Admin() {
  const [genre, setGenre] = useState("");
  const [edition, setEdition] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const admin = localStorage.getItem("admin");

  function handleFormSubmit() {
    fetch("https://librarybackendmasai.herokuapp.com/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        genre,
        edition,
        author,
        image,
        publisher,
        cost,
        borrowed:false
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {}, [admin]);

  if (!admin) {
    return <Navigate to="/adminlogin"/>
  }

  return (
    <Box mt={6}>
    <Stack border={"1px solid black"} borderRadius="10px" width={"30%"} margin="0 auto" spacing={"20px"} padding="20px">
        
      <Input
        required="true"
        id="outlined-basic"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        type="text"
      ></Input>
      
      
      <Input
      mt={6}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name of the Book"
        type="text"
      ></Input>
     
      <Input
      mt={6}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author of the Book"
        type="text"
      ></Input>
      
      <FormControl mt={6} fullWidth>
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
      <FormControl mt={6} fullWidth>
        <InputLabel id="demo-simple-select-label">Edition</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={edition}
          label="Edition"
          onChange={(e) => setEdition(e.target.value)}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
      <Input
      mt={6}
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        placeholder="Publisher"
        type="text"
      ></Input>
      <Input
      mt={6}
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        type="number"
        placeholder="Cost"
      ></Input>
      <Button variant="contained" mt={6} onClick={handleFormSubmit}>Submit</Button>
    </Stack>
    <Box  width={"90%"} margin="20px auto"  border="1px solid black">
        <BasicTable/>

    </Box>
    </Box>
  );
}

export default Admin;
