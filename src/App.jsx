import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Lab from './Pages/Lab'
import Home from './Pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Home />} />
        <Route path='/project' element={<Lab />} />
        <Route path='/projects' element={<Lab />} />
        <Route path='/lab' element={<Lab />} />

      </Routes>


    </div>
  )
}

export default App