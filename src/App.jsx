import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Terminal from './Pages/Terminal'
import Home from './Pages/Home'
import Lab from './Pages/Lab'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Terminal />} />
        <Route path='/Portfolio' element={<Home />} />
        <Route path='/project' element={<Lab />} />
        <Route path='/projects' element={<Lab />} />
        <Route path='/lab' element={<Lab />} />

      </Routes>
    </>
  )
}

export default App