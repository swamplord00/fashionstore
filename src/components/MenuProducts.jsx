/* eslint-disable react/prop-types */
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export const MenuProduct = ({ item,setFilter }) => {
    console.log(item)
  return (
    <>
      
      <div className="flex">
      <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/70 uppercase font-bold">
              {item.temporada}
            </p>
            
            <h4 className="text-black/90 font-medium text-xl">
              {item.titulo}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={item.img.imageZoom}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">{item.titulo} </p>
                <p className="text-tiny text-white/60">
                  {item.temporada}
                </p>
              </div>
            </div>
            <Button radius="full" size="sm" onClick={()=>setFilter(item.filtro)}>
              Ver
            </Button>
          </CardFooter>
        </Card>

      
      </div>

    
    </>
  );
};
