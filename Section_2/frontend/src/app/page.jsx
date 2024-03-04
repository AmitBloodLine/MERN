import Link from 'next/link';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize : '3rem' }} className='text-center mt-4'>Home Page</h1>
      <div className="links">
        <Link href='/login'>Login</Link>
        <Link href='/signup'>SignUp</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/about'>About</Link>
        <Link href='/eventhandling'>Event Handling</Link>
        <Link href='/todolist'>Todo List</Link>
      </div>
      <input type='text'></input>
      <button className='btn btn-warning'>Next</button>
    </div>
  )
}

export default Home;