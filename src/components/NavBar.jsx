import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalLogin } from "./ModalLogin";
import { ModalCart } from "./ModalCart";


export const NavBar = () => {

  const [toggleModal,setToggleModal]=useState(false)
  const [toggleModalCart,setToggleModalCart]=useState(false)
  const toggle=()=>{
        setToggleModal(!toggleModal)
  }  

  const toggleCart=()=>{
    setToggleModalCart(!toggleModalCart)
  }
  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">

      <div className="navbar-collapse">

        <div className="navbar-nav">

          <NavLink className="nav-item nav-link" to="/">

            Inicio

          </NavLink>

        </div>

        <div className="navbar-nav">

          <NavLink className="nav-item nav-link" to="/CataloguePage">

            Catálogo

          </NavLink>

        </div>

        <div className="navbar-nav">

          <NavLink className="nav-item nav-link" to="/UsPage">

            Quiénes somos

          </NavLink>

        </div>

        <div className="navbar-nav">

        <NavLink className="nav-item nav-link" to="/ContactPage">

            Contacto

          </NavLink>

        </div>

        <div className="navbar-nav">

        <NavLink className="nav-item nav-link" to="/RegisterFormPage">

            Registrarse

          </NavLink>

        </div>

        <div className="navbar-nav">
        {
            (toggleModal)&&<ModalLogin toggle={toggle}/>
        }
        <button onClick={toggle}>Login</button>

        </div>

        <div className="navbar-nav">
            {
                (toggleModalCart)&&<ModalCart toggle={toggleCart}/>
            }
            <button onClick={toggleCart}>carrito</button>

        </div>

      </div>

    </nav>

  );

};