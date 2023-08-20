const carritoDeCompras = [

    {
  
      title: 'Producto 1',
  
      price: 100,
  
      quantity: 1,
  
      id: 1
  
    },
  
    {
  
      title: 'Producto 2',
  
      price: 200,
  
      quantity: 2,
  
      id: 2
  
    },
  
    {
  
      title: 'Producto 3',
  
      price: 150,
  
      quantity: 1,
  
      id: 3
  
    }
  
  ]
  
   
  
  let precioTotal = 0
  
   
  
  carritoDeCompras.forEach((producto) => {
  
    precioTotal += producto.price * producto.quantity
  
    return precioTotal
  
  })