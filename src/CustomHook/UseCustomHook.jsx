import React, { useState } from 'react'

const UseCustomHook = (initialState=false) => {
  const [toggle,setToggle]=useState(initialState)

let changer=()=>{
  setToggle((prev)=>!prev)
}

  return [toggle,changer]
}

export default UseCustomHook
