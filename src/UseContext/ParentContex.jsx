import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const ParentContex = () => {
    const {name}=useContext(UserContext)
  return (
    <div>
      <h1>name:{name}</h1>
    </div>
  )
}

export default ParentContex
