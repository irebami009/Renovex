import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Componenet/NavBar'
import Homepage from './Pages/Homepage'
import Footer from './Componenet/Footer'

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* HOME */}
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App