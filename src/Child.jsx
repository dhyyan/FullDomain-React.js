import React from 'react'

function Child({prop}) {

    // const changed=()=>{

    // }
  return (
    <div>
      <input type="text" onChange={(e)=>prop(e.target.value)}/>
      {/* <button onClick={()=>changed()}>clicked</button> */}
    </div>
  )
}

export default Child
