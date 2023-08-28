import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ProductPage = () => {
 const {idProduct}=useParams()
 const [producto,setProducto]=useState(null)
 useEffect(()=>{
    const getProductById=async()=>{
        const productById= await axios.get(`https://backend-p5.onrender.com/products/item/${idProduct}`)
        setProducto(productById.data.detail)
    }
    getProductById()

        
 },[])
  return (
    <>
        {JSON.stringify(producto)}

    </>
  )
}
