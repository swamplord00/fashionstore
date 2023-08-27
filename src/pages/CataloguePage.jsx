import { ProductCard } from "../components/ProductsCards"

const productos=[
  {
    tìtulo:'polera deportiva',
    catalogo__tipo_id:"ropa",
    catalogo_genero_id:"Male",
    catalogo_estilo_id:"sport",
    marca:'nike',
    stock:[
      {tamanio:'s',qty:3,dimensiones:'56x65',color:'red'},
      {tamanio:'m',qty:4,dimensiones:'60x70',color:'yellow'},
      {tamanio:'l',qty:5,dimensiones:'64x75',color:'green'},
    ],
    precio:50000,
    temporada:'verano',
    valoracion:4.5,
    vendidos:20,
    img:{
      thumbnail:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000',
      imageZoom:'https://nikeclprod.vteximg.com.br/arquivos/ids/624979-1000-1000/DX1071_010_A_PREM.jpg?v=638036903320170000'
    },
    id:12321,


  },
  {
    tìtulo:'polera deportiva',
    catalogo__tipp_id:"ropa",
    catalogo_genero_id:"Male",
    catalogo_estilo_id:"sport",
    marca:'nike',
    stock:[
      {tamanio:'s',qty:3,dimensiones:'56x65',color:'red'},
      {tamanio:'m',qty:4,dimensiones:'60x70',color:'yellow'},
      {tamanio:'l',qty:5,dimensiones:'64x75',color:'green'},
    ],
    precio:60000,
    temporada:'verano',
    valoracion:4,
    vendidos:22,
    img:{
      thumbnail:'https://nikeclprod.vteximg.com.br/arquivos/ids/628314-1000-1000/DX1071_010_F_PREM.jpg?v=638036995104700000',
      imageZoom:'https://nikeclprod.vteximg.com.br/arquivos/ids/628314-1000-1000/DX1071_010_F_PREM.jpg?v=638036995104700000'
    },
    id:45234524,


  }
]

export const Catalogue = () => {
  return (
    <>
      <div>
          <h1>Catalogo de Productos</h1>
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            
            {
              productos.map((item)=>(
                <ProductCard key={item.id} item={item}/>
              ))
            }
            
            
          </div>


      </div>
    
    
    
    </>
  )
}
