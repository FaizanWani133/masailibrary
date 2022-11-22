import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(true);
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    function handleLogin(){
        if(email==='admin@gmail.com' && password === 'masai'){
            localStorage.setItem('admin',true);
            setOpen(false);
        }else{
            alert("error")
        }
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
            <Button onClick={handleLogin}>Login</Button>
        </DialogActions>
       
      </Dialog>
    </div>
  );
}