/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { ProductContext } from "./productContext"
import productReducer from "./productReducer"

export const ProductProvider = ({children}) => {
  const [state,dispatch]=useReducer(productReducer,null)
  return (
    <ProductContext.Provider value={[state,dispatch]}>
        {children}
    </ProductContext.Provider>
  )
}
