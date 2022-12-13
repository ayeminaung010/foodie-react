import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Details from './Details'
import './index.css'
import Meals from './Meals'
import Navbar from './Navbar'
const App = () => {
  return (
    <div className='container max-w-6xl mx-auto '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}></Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default App