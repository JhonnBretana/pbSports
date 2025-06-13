import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WebPages from './Main/WebPages.jsx'


function App() {

  return (
    <Routes>

      <Route path="/" element={<WebPages />} />


    </Routes>
  )
}

export default App
