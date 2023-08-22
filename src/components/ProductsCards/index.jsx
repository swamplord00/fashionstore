/* eslint-disable react/prop-types */

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export const ProductCard=({item})=> {
  

  return (
   
      
        <Card shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
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



