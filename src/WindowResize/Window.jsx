import React, { useState, useEffect } from 'react'

const Parent = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize',()=>{
      window.location.reload()
    })

  }, [])

  return (
    <div>
      <h2>Width: {width}px</h2>
      <h2>Height: {height}px</h2>
    </div>
  )
}

export default Parent
