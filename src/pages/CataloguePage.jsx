
import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../components/ProductsCards"

import { ProductContext } from "../context/products/productContext"
import axios from "axios"
import { productTypes } from "../context/products/productReducer"
import { MenuProduct } from "../components/MenuProducts"
import { Divider, Spacer } from "@nextui-org/react"


const productos=[
  {
    titulo:'Catálogo Hombre',
    catalogo_tipo_id:"ropa",
    catalogo_genero_id:"Hombre",
    catalogo_estilo_id:"sport",
    filtro:"Hombre",
    temporada:'2023',
    img:{
      thumbnail:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
      imageZoom:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
    },
    id:12321,
  },
  {
    titulo:'Catálogo Mujer',
    catalogo_tipo_id:"ropa",
    catalogo_genero_id:"Mujer",
    catalogo_estilo_id:"sport",
    filtro:"Mujer",
    temporada:'2023',
    img:{
      thumbnail:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
      imageZoom:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
    },
    id:12322,
  },
  {
    titulo:'Catálogo Accesorios',
    filtro:"Accesorios",
    temporada:'2023',
    img:{
      thumbnail:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
      imageZoom:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
    },
    id:12323,
  },
  {
    titulo:'Catálogo Perfumes',
    filtro:"Perfumes",
    temporada:'2023',
    img:{
      thumbnail:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
      imageZoom:'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
    },
    id:12324,
  },
  

]



export const Catalogue = () => {
  const [,dispatch]=useContext(ProductContext)
  const [state,setState]=useState([])
  const [filter,setFilter]=useState("")
  const [filteredProducts,setFilteredProducts]=useState(state)

  const filterProducts=()=>{

    if(filter==="")return state;
    console.log(filter)
    if(filter==="Accesorios"){
      return state.filter((el)=>{
        console.log(el.catalogo)
        console.log(filter)
        return el.catalogo===filter
        
    })
    }
    const filtered=state.filter((el)=>{
        return el.catalogo===filter
    })
    return filtered
  }

  useEffect(()=>{
    const filteredP=filterProducts()
    setFilteredProducts(filteredP)

  },[filter,state])

  useEffect(() => {
    const fetchCatalogue = async () => {
      try {
        const { data } = await axios.get("https://backend-p5.onrender.com/products");
        setState(data.detail)
        console.log(data)
        
      } catch (err) {
        console.log(err);
        dispatch({
          type: productTypes.setError,
          payload: err,
        });
      }
    };
    fetchCatalogue();
    
    console.log(state)
  }, []);
  console.log(state)
  return (
    <>
      <div>
          <h1>Catalogo de Productos</h1>
          
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            
           
            {
              
              productos?.map((item)=>(
                <MenuProduct setFilter={setFilter} key={item.id} item={item}/>
              ))
            }
            
            
          </div>
          <Divider className="my-4" />
          <Spacer y={8}/>
            <h1>
              
            </h1>
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            
           
            {
              filteredProducts?.map((item)=>(
                <ProductCard key={item._id} item={item}/>
              ))
            }
            
            
          </div>


      </div>
    
    
    
    </>
  )
}
