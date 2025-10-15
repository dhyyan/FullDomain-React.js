import React from 'react'
import UseCustomHook from './UseCustomHook'

const UseCustomParent = () => {
  const [on,setOn]=UseCustomHook(false)
  return (
    <div>
      <h1>{on?"on":"off"}</h1>
      <button onClick={setOn}>{on?"off":"on"}</button>
    </div>
  )
}

export default UseCustomParent
