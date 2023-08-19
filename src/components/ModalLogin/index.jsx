/* eslint-disable react/prop-types */
import "./style.css"

export const ModalLogin = ({toggle}) => {
  return (
    <div className="login-modal">
      Hola Soy Modal 
      
    <button onClick={toggle}>cerrar</button>  
    </div>
  )
}
