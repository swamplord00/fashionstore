
import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../components/ProductsCards"

import { ProductContext } from "../context/products/productContext"
import axios from "axios"
import { types } from "../context/products/productReducer"
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
      thumbnail:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000',
      imageZoom:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000'
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
      thumbnail:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000',
      imageZoom:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000'
    },
    id:12322,
  },
  {
    titulo:'Unisex',
    catalogo_tipo_id:"ropa",
    catalogo_genero_id:"Unisex",
    catalogo_estilo_id:"sport",
    filtro:"Unisex",
    temporada:'2023',
    img:{
      thumbnail:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000',
      imageZoom:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000'
    },
    id:12323,
  },
  {
    titulo:'Catálogo Accesorios',
    catalogo_tipo_id:"Accesorios",
    catalogo_genero_id:"Unisex",
    catalogo_estilo_id:"sport",
    filtro:"Accesorios",
    temporada:'2023',
    img:{
      thumbnail:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000',
      imageZoom:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000'
    },
    id:12324,
  },
  

]



export const Catalogue = () => {
  const [Cartstate,dispatch]=useContext(ProductContext)
  const [state,setState]=useState([])
  const [filter,setFilter]=useState("")
  const [filteredProducts,setFilteredProducts]=useState(state)

  const filterProducts=()=>{

    if(filter==="")return state;
    console.log(filter)
    if(filter==="Accesorios"){
      return state.filter((el)=>{
        console.log(el.catalogo_tipo_id)
        console.log(filter)
        return el.catalogo_tipo_id===filter
        
    })
    }
    const filtered=state.filter((el)=>{
        return el.catalogo_genero_id===filter
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

        dispatch({
          type: types.setCartState,
          payload: data.detail,
        });
      } catch (err) {
        console.log(err);
        dispatch({
          type: types.setError,
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

          {/* <div>
            <button type="button" onClick={()=>setFilterGender(
              state?.filter((item)=>(
                <ProductCard key={item._id} item={item}/>
              ))
            )}>Genero</button>
            <button type="button" onClick={()=>setFilterType(
              state?.filter((item)=>(
                <ProductCard key={item._id} item={item}/>
              ))
            )}>Tipo</button>
            <button type="button" onClick={()=>setfilterStyle(
              state?.filter((item)=>(
                <ProductCard key={item._id} item={item}/>
              ))
            )}>Estilo</button>

          </div> */}
          

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
