import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import AdvanceInfo from './components/AdvanceInfo';
import BasicInfo from './components/BasicInfo';
import Course from './components/Course';
import DiamondStar from './components/DiamondStar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< BasicInfo />}></Route>
        <Route exact path='/advanceinfo' element={< AdvanceInfo />}></Route>
        <Route exact path='/course' element={< Course />}></Route>
        <Route exact path='/diamondstar' element={< DiamondStar />}></Route>
      </Routes>
    </div>
  )
}

export default App
