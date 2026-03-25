import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
const Header = () => {
  return (
    <div className=' '>
    
    <div className='flex justify-between text-3xl p-2 1  items-center flex-wrap'>
        <div className='mb-0 '>
          <h1 className='font-serif text-2xl font-bold text-green-600'>🌿<span className='text-black font-light'>Share</span>Bite</h1>
        </div>
    <div className=' flex gap-7 font-mono text-sm f mr-20 mt-3 font-medium opacity-80'>
      <Link to="/" className='hover:text-green-800'>Home</Link>
      <Link to="/about"  className='hover:text-green-800'>About</Link>
      <Link to="/contact"  className='hover:text-green-800'>Contact</Link>
      {/* <Link to={"/food"}>Food</Link> */}
      {/* <Link to="/work">Work</Link> */}
      <Link to="/login" className=' bg-blue-500 p-2 text-white font-mono rounded-lg hover:bg-blue-600 pb-2'>Log in</Link>
      <Link to="/signup" className=' bg-green-600 p-2 text-white font-mono rounded-lg hover:bg-green-700 pb-2 w-25 flex justify-center'>Sign up</Link>

 

    </div>
    </div>
      
   

   </div>
  )
}

export default Header
