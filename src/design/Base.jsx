import React from 'react'
import Getstarted from './Getstarted'
import Learnmore from './Learnmore'

const Base = () => {
  return (
    <>
    <h1 className='Heading'> Book Your Tickets ! </h1>
        <Learnmore/>
        <Getstarted/>
    </>
  )
}

export default Base