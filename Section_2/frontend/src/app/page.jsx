import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize : '3rem' }}>Home Page</h1>
      <Link href='/login'>Login</Link>
      <Link href='/signup'>SignUp</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
      <input type='text'></input>
      <button className='btn'>Next</button>
    </div>
  )
}

export default Home;