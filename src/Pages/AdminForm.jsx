import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate, useNavigate } from 'react-router';

export default function FormDialog() {
    const [open, setOpen] = React.useState(true);
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const admin = localStorage.getItem("admin")
    const navigate = useNavigate();
    function handleLogin(){
        if(email==='admin@gmail.com' && password === 'masai'){
            localStorage.setItem('admin',true);
            
           return navigate("/admin") 
        }else{
            alert("Wrong Credentials")
        }
    }
    if(admin){
        return <Navigate to={'/admin'}/>
    }
  return (
    <div>
      <Dialog open={open} >
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
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </DialogActions>
       
      </Dialog>
    </div>
  );
}