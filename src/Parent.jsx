import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name,setName]=useState("")
    // const resize=()=>{
    //     window.sa
    // }

    useEffect(()=>{
      window.addEventListener('resize',()=>{
        window.location.reload()
      })
    },[])

  return (
    <div>
      <h1>name:{name}</h1>
      <button>click</button>
      <Child prop={setName}/>
    </div>
  )
}

export default Parent
