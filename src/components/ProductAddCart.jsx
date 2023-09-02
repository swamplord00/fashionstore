/* eslint-disable react/prop-types */

import {Link} from 'react-router-dom'

export const ProductAddCart = ({item,deleteFromCart}) => {
    
   
console.log(item)


  return (
    <>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={item.img.thumbnail}
            alt={item.titulo}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <Link to={`/Catalogue/${item._id}`} >{item.titulo} </Link>
              </h3>
              <p className="ml-4">{item.precio}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
            <p className="mt-1 text-sm text-gray-500">{item.talla}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty 1</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={deleteFromCart}
              >
                Quitar
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
