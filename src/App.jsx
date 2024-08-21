import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Academic from './components/Academic'
import Course from './components/Course'
import Grades from './components/Grades'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/academic" element={<Academic/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/grades" element={<Grades/>}/>
      </Routes>
    </Router>
  )
}

export default App
