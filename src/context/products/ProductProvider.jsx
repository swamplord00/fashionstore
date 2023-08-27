/* eslint-disable react/prop-types */
import { ProductContext } from "./productContext"

export const ProductProvider = ({children}) => {

  return (
    <ProductContext.Provider>
        {children}
    </ProductContext.Provider>
  )
}
