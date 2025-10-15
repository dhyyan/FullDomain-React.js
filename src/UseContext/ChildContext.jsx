import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const ChildContext = () => {
    const {setName}=useContext(UserContext)
  return (
    <div>
      <button onClick={()=>setName("appu")}>change</button>
    </div>
  )
}

export default ChildContext
