import { useState } from 'react'

import './App.css'
import { Login } from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

function App() {
  const [count, setCount] = useState(0)
  return <>
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login></Login>} ></Route>
    <Route path='/home' element={<Home></Home>} > </Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App
