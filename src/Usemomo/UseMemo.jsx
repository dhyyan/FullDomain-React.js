import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [num,setNum]=useState(0)
    const calculat=useMemo(()=>{
        let sum=0
        console.log("runned memoo")
        for(let i=0;i<1000000;i++){
            sum+=i
        }
        return sum
    },[])

  return (
    <div>
      <h1>count:{num}</h1>
      <button onClick={()=>setNum(num+1)}>inc</button>
      <h1>ans:{calculat}</h1>
    </div>
  )
}

export default UseMemo
