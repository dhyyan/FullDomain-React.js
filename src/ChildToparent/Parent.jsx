import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name,setName]=useState("")
  return (
    <div>
        <h1>name:{name}</h1>
      <Child prop={setName}/>
    </div>
  )
}

export default Parent
