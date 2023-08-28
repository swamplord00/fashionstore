import axios from "axios"

export const getCatalogue=async()=>{
    const {data}=await axios.get('https://backend-p5.onrender.com/products')
    console.log(data)
    
  }