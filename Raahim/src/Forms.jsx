import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Forms = () => {
const [get,setGet]=useState({
  name:'',
  username:'',
  email:'',
  phone:''
})



  const handlesubmit=(e)=>{
e.preventDefault();
axios.post('http://localhost:5230/users',get)
.then((res)=>alert("add successfully"))
.catch((err)=>alert("Not Add successfully"))
}

  return (
    <form onSubmit={handlesubmit}>
      


      <Paper elevation={24} sx={{margin:'auto',width:'50%',padding:5,backgroundColor:'gray'}}>
        <TextField onChange={(e)=>
          setGet({...get,name:e.target.value})} sx={{mb:4}} fullWidth label='name' />
        <TextField  onChange={(e)=>
          setGet({...get,username:e.target.value})} sx={{mb:4}} fullWidth label='username' />
        <TextField  onChange={(e)=>
          setGet({...get,email:e.target.value})} sx={{mb:4}} fullWidth label='email' />
        <TextField  onChange={(e)=>
          setGet({...get,phone:e.target.value})} sx={{mb:4}} fullWidth label='phone' />
<Button variant='contained' type='submit'>Add</Button>
         </Paper>
    </form>
  )
}

export default Forms
