import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { indcrement } from './Store/CounterSlice'

const Counter = () => {
    const count=useSelector((item)=>item.count.value)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(indcrement())}>increment</button>
    </div>
  )
}

export default Counter
