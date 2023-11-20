import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext, useState, useEffect } from "react";
import { post } from "../utils/http";
import Swal from 'sweetalert2'

const CarritoContext = createContext()

const url = 'https://655b4a9bab37729791a8dbb0.mockapi.io/carrito'

const CarritoProvider = ( { children } ) => {
    const [ agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito ] = useLocalStorage('carrito', [])

    const[totalFinal, setTotalFinal] = useState(0)
    
    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }
    const agregarCarritoContext = (producto) => {

        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            guardarCarrito(carrito)
            
        }
    }
    
    const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
        try {
            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.log('[cambiarCantidadCarritoContext]: No se pudo guardar la nueva cantidad', error)
        }
    }

    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }
    const guardarCarritoContext = async () => {
        try {
            const carritoGuardado = await post(url, carrito)
            console.log(carritoGuardado)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Compra Procesada",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.error('[guardarCarritoContext]: No se pudo guardar el carrito',error)
        }
        
    }
    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }
    const cantidadArticulosCarritoContext = () => {
        let sumaTotalArticulos = carrito.reduce((total, producto) => {
            return (Number(total) + Number(producto.cantidad))
        }, 0)
        return sumaTotalArticulos
    }
    const precioTotalArticulosCarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio*producto.cantidad)
        }, 0)
        return sumaTotal
    }

    useEffect(() => {
      setTotalFinal(precioTotalArticulosCarritoContext())
    
    }, [carrito])
    



    const data = { carrito,
        agregarCarritoContext,
        eliminarProductoCarritoContext,
        guardarCarritoContext,
        vaciarCarritoContext,
        cantidadArticulosCarritoContext,
        totalFinal,
        cambiarCantidadCarritoContext}
    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }

export default CarritoContext
