import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from './Homepage'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< Homepage />} />
      <Route path="/airlines" element={ <Airlines />} />
      <Route path="/airlines/:slug" element={ <Airline />} />
    </Routes>
  )
}

export default App;
