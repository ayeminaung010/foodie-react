import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Details from './Details'
import './index.css'
import Meals from './Meals'
import Navbar from './Navbar'
const App = () => {
  return (
    <div className='container mx-auto '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}></Route>
        <Route path='/detail' element={<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default App