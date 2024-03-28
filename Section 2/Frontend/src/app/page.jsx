import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 style={{ color : 'red', fontSize : '3em' }}>My Home Page</h1>
      <Link href='/login'>Login</Link>
      <Link href='/signup'>SignUp</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
      <Link href='/eventhandling'>Event Handling</Link>
      <Link href='/todolist'>TodoList</Link>
      <Link href='/uploadPost'>UploadPost</Link>
      <input type='text'></input>
      <button className='btn btn-warning'>Next</button>
    </div>
  )
}

export default Home;