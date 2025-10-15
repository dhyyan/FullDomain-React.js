import React, { useCallback, useState } from 'react'
import UseCallBackChild from './UseCallBackChild'

const UseCallBack = () => {
    let [value,setVlaue]=useState(0)
    let [num,setNum]=useState(0)

    const handleInc=useCallback((val)=>{
        console.log("function called")
        setVlaue((prev)=>prev+val)
    },[])
  return (
    <div>
      <h1>count:{value}</h1>
      {/* <button onClick={()=>handleInc()}>increment</button> */}
      <h1>Num:{num}</h1>
      <button onClick={()=>setNum(num+1)}>inc Num</button>

    <UseCallBackChild prop={handleInc}/>

    </div>
  )
}

export default UseCallBack
