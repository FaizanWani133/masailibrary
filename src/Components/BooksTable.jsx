import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';





export default function BasicTable() {
    const [data,setData] = React.useState([]);



    React.useEffect(() => {
     fetch('http://localhost:3001/books').then(res=>res.json()).then(res=>setData(res))
    
    }, [])
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Name of the book</TableCell>
            <TableCell align="right">Author of the book</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Edition</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.image} width="100px" />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.genre}</TableCell>
              <TableCell align="right">{row.edition}</TableCell>
              <TableCell align="right">{row.publisher}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right"><Button>EDIT</Button></TableCell>
              <TableCell align="right"><Button>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}