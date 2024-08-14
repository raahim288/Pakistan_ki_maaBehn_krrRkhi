import React, { useEffect, useState } from 'react'
import Tables from './Tables'
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const [one,setOne]=useState([]);
 
useEffect(()=>{
    setfunc()
},[])
 const setfunc= ()=>{

 axios.get('http://localhost:5230/users').then((res)=>setOne(res.data))
       .catch((err)=>console.log(err))
      
 }

 const navigate=useNavigate()

 console.log(one)
    return (
    <div>

      
    <Button variant='contained' sx={{marginLeft:'42rem'}} onClick={()=>navigate('/Form')}>Add User</Button>
      <Tables data={one}/>
    </div>
  )
}

export default Home
