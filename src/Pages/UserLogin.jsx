import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate, useNavigate } from 'react-router';

export default function UserLogin() {
    const [open, setOpen] = React.useState(true);
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const navigate = useNavigate();
    
    function handleLogin(){
        users = JSON.parse(localStorage.getItem('users')) || [];
        const flag = users.some(el=>el.email===email && el.password === password )
        if(flag){
            localStorage.setItem('user',true);
            return navigate("/book")
        }else{
            alert("wrong password")
        }
        // console.log(email,password);
        // console.log(flag);
        // console.log(users);
    }
  return (
    
      <Dialog sx={{bgcolor:"teal"}} open={open} >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
        
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
            <Button variant='contained' onClick={handleLogin}>Login</Button>
            <Button variant='outlined' onClick={()=>{
                return navigate("/usersignup")
            }}>Need an Account</Button>
        </DialogActions>
       
      </Dialog>
   
  );
}