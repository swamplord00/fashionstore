/* eslint-disable react/prop-types */


import { SlideOverCart } from "../SlideOverCart"
import "./style.css"


export const ModalCart = ({toggle}) => {
  return (
    <div className="cart-modal">
        {/* <Cart/> */}
        <SlideOverCart toggle={toggle}/>
        {/* <button onClick={toggle}>Cerrar</button> */}
    
    </div>
    
  )
}