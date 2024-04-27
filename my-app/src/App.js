import React from 'react'
import Home from './home/Home'
import Gbook from './guestbook/Gbook'
import Project from './project/Project'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/guestbook" element={<Gbook/>} />
      <Route path="/project" element={<Project/>} />
    </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App