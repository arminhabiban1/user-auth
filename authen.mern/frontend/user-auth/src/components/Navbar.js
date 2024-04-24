import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
      <Link to='/'><h1 className='text-3xl'>autHDB</h1></Link>
      <ul className='flex gap-6'>
        <Link to='login'><li>login</li></Link>
        <Link to='/signup'><li>sign up</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar