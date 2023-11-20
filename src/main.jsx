import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { ProductosProvider } from './contexts/ProductosContext'
import * as bootstrap from 'bootstrap'

import Inicio from './pages/Inicio'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import NoEncontrada from './pages/NoEncontrada'
import Nosotros from './pages/Nosotros'
import Navbar from './components/Navbar'
import Alta from './pages/Alta'
import { CarritoProvider } from './contexts/CarritoContext'
import Footer from './components/Footer'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar />
          
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="carrito" element={<Carrito />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="*" element={<NoEncontrada />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="alta" element={<Alta />} />
            </Routes>
          
          <Footer />
        </BrowserRouter>
        </CarritoProvider>  
    </ProductosProvider>
  </React.StrictMode>,
)
