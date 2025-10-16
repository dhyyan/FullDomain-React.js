import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const [running,setRunning]=useState(false)

   useEffect(()=>{
    let time=""
    if(running){
      time=setInterval(()=>{
        setCount((prev)=>prev+1)
      },1000)
    }
      return ()=>clearInterval(time)
    
  },[running])

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setRunning(prev=>!prev)}>{running?"stop":"start"}</button>
 
    </div>
  )
}

export default App
