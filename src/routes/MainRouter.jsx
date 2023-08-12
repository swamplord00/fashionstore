import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RegisterFormPage } from '../pages/RegisterFormPage'
import { LoginFormPage } from '../pages/LoginFormPage'
import { HomePage } from '../pages/HomePage'

export const MainRouter = () => {
  return(

    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/RegisterFormPage' element={<RegisterFormPage/>}/>
            <Route path='/LoginFormPage' element={<LoginFormPage/>} />

        </Routes>

    
    </>

  ) 
  
}

