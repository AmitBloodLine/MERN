'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div className='container py-4'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />

        <button
            className='btn btn-primary'
            onClick={ () => { alert('button clicked') } }
        >Click Here</button>

        <input type='color' onChange={ (e) => {console.log(e.target.value);} } />
        <input type='color' onChange={ (e) => {document.body.style.background = e.target.value;} } />

    </div>
    
  )
}

export default EventHandling
