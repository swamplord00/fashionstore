
import { Route, Routes } from 'react-router-dom'
// import { RegisterFormPage } from '../pages/RegisterFormPage'
// import { LoginFormPage } from '../pages/LoginFormPage'
import  HomePage  from '../pages/HomePage'
import { SuccessPurchase } from '../pages/SuccessPurchase'
import { Catalogue } from '../pages/CataloguePage'

export const MainRouter = () => {
  return(

    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Admin' element={<h1>formulario de admin</h1>} />
            <Route path='/AdminDashBoard' element={<></>} />
            <Route path='/success-purchase' element={<SuccessPurchase/>}/>
            <Route path="/Catalogue" element={<Catalogue/>} />

        </Routes>

    
    </>

  ) 
  
}

