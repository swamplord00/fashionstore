import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ModalLogin } from "./ModalLogin";


export const NavBar = () => {

  const [toggleModal,setToggleModal]=useState(false)
  const toggle=()=>{
        setToggleModal(!toggleModal)
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

          <NavLink className="nav-item nav-link" to="/ServicesPage">

            Nuestros Servicios

          </NavLink>

        </div>

        <div className="navbar-nav">

          <NavLink className="nav-item nav-link" to="/ReservationPage">

            Reservación

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

        <NavLink className="nav-item nav-link" to="/LoginFormPage">

            Ingresar

          </NavLink>

        {
            (toggleModal)&&<ModalLogin toggle={toggle}/>
        }
        <button onClick={toggle}>mostrar modal</button>

        </div>

      </div>

    </nav>

  );

};