/* eslint-disable react/prop-types */
import { LoginForm } from "../LoginForm"
import "./style.css"

export const ModalLogin = ({toggle}) => {
  return (
    <div className="login-modal">
      <LoginForm/>
      
    <button onClick={toggle}>cerrar</button>  
    </div>
  )
}
