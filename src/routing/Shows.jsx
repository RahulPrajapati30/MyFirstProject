import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../redux/Slice';

const Shows = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookYourTickets);
  return (
    <>
        <button onClick={(e) => dispatch(api())}>Get Shows</button>
        {state.data?.map((e,index) => {
          return <li key={index}>{e}</li>
        })}
    </>
  )
}

export default Shows