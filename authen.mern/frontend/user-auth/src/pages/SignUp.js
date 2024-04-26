import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
  
const SignUp = () => {
  const[user,setUser]=useState([])
  const[email,setEmail]=useState('')
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const navigate = useNavigate()
  useEffect(()=>{

    fetchUsers()
  },[])

  const fetchUsers = async () => {
    axios
     .get('http://localhost:3001/register')
     .then((res)=>{
      // console.log(res.data)
     })}


     const handleRegister=(event)=>{
      event.preventDefault()
      axios.post('http://localhost:3001/register',{email,username,password})
      .then(()=>{
        alert('register success')
        setEmail('')
        setUsername('')
        setPassword('')
        fetchUsers()
        navigate('/login')
      })
     .catch((err)=>{
        console.log('unable to register')
        
      })
    }








  return (
    <div className='w-full h-screen flex'>
      <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
        <form className='text-center border rounded-lg w-[600px] h-[400px] p-9' onSubmit={handleRegister} >
<label htmlFor="">Email</label>
<br />
<input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' />
<br />
<br />
<label htmlFor="">Username</label>
<br />
<input type='text' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} value={username} className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' />
<br />
<br />
<label htmlFor="">Password</label>
<br />
<input type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' />
<br />
<br />
<button className='w-[200px] h-[50px] border hover:bg-teal-800' type='submit'>SignUp</button>
        </form>
      </div>
      <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
        <h2 className='text-3xl text-white'>SIGNUP</h2>
      </div>
    </div>
  )
 }

export default SignUp