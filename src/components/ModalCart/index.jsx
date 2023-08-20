/* eslint-disable react/prop-types */

import { Cart } from "../Cart"
import "./style.css"


export const ModalCart = ({toggle}) => {
  return (
    <div className="cart-modal">
        <Cart/>
        <button onClick={toggle}>Cerrar</button>
    
    </div>
    
  )
}