import React from 'react'
import Hoc from './Hoc'
import Parent from './Parent'

const App = () => {
  const HocComponent = Hoc(Parent)
  return (
    <div>
      <HocComponent />
    </div>
  )
}

export default App
