/* eslint-disable react/prop-types */

import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../context/products/productContext"
import { ProductAddCart } from "./ProductAddCart"
import { productTypes } from "../context/products/productReducer"


export const SlideOverCart = ({toggle}) => {
    const [productState,dispatch]=useContext(ProductContext)

    const deleteFromCart=(index)=>{
        const nuevoArray=[...productState.cart]
        nuevoArray.splice(index,1)
        dispatch({
            type:productTypes.deleteCartProduct,
            payload:nuevoArray
        })   
        console.log(productState)
    }

  return (
    <>
    
  <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-sky-700 bg-opacity-95 transition-opacity">
    <h2 className="text-lg font-medium text-white p-2" id="slide-over-title">Sugerencias :</h2> 
  </div>

  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Carrito de compras</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" onClick={toggle} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Cerrar panel</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    
                  {
                    productState.cart?.map((item,index)=>(
                        <ProductAddCart key={index} item={item} deleteFromCart={()=>deleteFromCart(index)}/>
                    ))
                  }

                  
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Envio e impuestos se calcular en el checkout.</p>
              <div className="mt-6">
                <NavLink to="/CheckOut"> 
                <div onClick={toggle} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</div>
                    
                </NavLink>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <section>
                  o <hr/>
                  <button type="button" onClick={toggle} className="font-medium text-indigo-600 hover:text-indigo-500">
                     Continuar comprando
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    
    </>
  )
}
