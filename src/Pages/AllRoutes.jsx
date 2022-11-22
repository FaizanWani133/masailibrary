import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../Components/Navbar'
import Admin from './Admin'
import Books from './Books'
import Home from './Home'
import User from './User'

function AllRoutes() {
  return (<>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/book' element={<Books/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes