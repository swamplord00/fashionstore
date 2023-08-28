/* eslint-disable react/prop-types */

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const ProductCard=({item})=> {
  const linkProduct=()=>{
    navigate(`/Catalogue/${item._id}`)
  }
  const navigate=useNavigate()

  return (
   
      
        <Card shadow="sm"  isPressable onPress={linkProduct}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.categoria}
              className="w-full object-cover h-[140px]"
              src={item.img.thumbnail}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.categoria} {item.marca} {item.modelo}</b>
            <p className="text-default-500">{item.precio}</p>
          </CardFooter>
        </Card>
    
    
  );
}



