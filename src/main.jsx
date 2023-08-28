import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { UserProvider } from './context/user/UserProvider.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { ProductProvider } from './context/products/ProductProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
    
      <BrowserRouter>
        <UserProvider>
        <ProductProvider>

          <App />

        </ProductProvider>

        </UserProvider>

    </BrowserRouter>
    
    </main>

    </NextUIProvider>
  </React.StrictMode>
)
