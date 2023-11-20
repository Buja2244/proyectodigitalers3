import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { get } from "../utils/http"

const ProductosContext = createContext()

const url = 'https://655b4a9bab37729791a8dbb0.mockapi.io/productos'
console.log(url)

const ProductosProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, [])

    const obtenerProductos = async () => {
        try {
            const productsBack = await get(url)
            setProductos(productsBack)
        } catch (error) {
            console.log(`[obtenerProductos] -> Algo no funcionó -> ${error}`)
        }
    }

    const crearProductoContext = (productoNuevo) => {

    }

    const actualizarProductoContext = (productoEditar) => {

    }

    const eliminarProductoContext = (id) => {

    }

    const data = { productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


export { ProductosProvider }

export default ProductosContext