import Link from 'next/link';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'

const Home = () => {
  return (
    <div>
      <h1 className={`text-center mt-4 ${styles.home}`}>Home Page</h1>
      <div className={`${styles.links}`}>
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