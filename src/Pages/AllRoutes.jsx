import React from 'react'
import { Route, Routes } from 'react-router'

import Admin from './Admin'
import FormDialog from './AdminForm'
import Books from './Books'
import Home from './Home'

import UserLogin from './UserLogin'
import UserSignup from './UserSignup'

function AllRoutes() {
  return (<>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/adminlogin' element={<FormDialog/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/usersignup' element={<UserSignup/>}></Route>
        <Route path='/userlogin' element={<UserLogin/>}></Route>
        <Route path='/book' element={<Books/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes