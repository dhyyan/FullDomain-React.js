import React from 'react'

const UseCallBackChild = ({prop}) => {
    console.log("child runned")
  return (
    <div>
         <button onClick={()=>prop(1)}>increment</button>
    </div>
  )
}

export default React.memo(UseCallBackChild)
