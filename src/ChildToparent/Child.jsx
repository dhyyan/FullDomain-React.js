import React from 'react'

const Child = ({prop}) => {
    
  return (
    <div>
      <button onClick={()=>prop("appu")}>add value</button>
    </div>
  )
}

export default Child
