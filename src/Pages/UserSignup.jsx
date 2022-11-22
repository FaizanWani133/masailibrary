import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

export default function UserSignup() {
    const [open, setOpen] = React.useState(true);
    const [email , setEmail] = React.useState("");
    const [name , setName] = React.useState("");
    const [password , setPassword] = React.useState("");
    const navigate = useNavigate();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    function handleSignup(){
        let body = {
            name,
            email,
            password
        };
        users = [...users,body];
        localStorage.setItem('users', JSON.stringify(users))
        return  navigate("/userlogin")
    }
  return (
    <div>
      <Dialog open={open} >
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="name"
            fullWidth
            variant="standard"
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="standard"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
          />
          
        </DialogContent>
        <DialogActions>
            <Button onClick={handleSignup}>Signup</Button>
        </DialogActions>
       
      </Dialog>
    </div>
  );
}