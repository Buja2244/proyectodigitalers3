import { useState } from "react"

export const useLocalStorage = (clave, valorInicial = []) => {

    const getValorAlmacenado = () => {
        try {
            const valorAlamacenadoLS = window.localStorage.getItem(clave)
            return valorAlamacenadoLS ? JSON.parse(valorAlamacenadoLS) : valorInicial
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage ${error}`)
            return valorInicial
        }
    }
    
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValoresLS = (valores) => {
        try {
            setValorAlmacenado(valores)
            window.localStorage.setItem(clave,JSON.stringify(valores))
        } catch (error) {
            console.error(`Error al guardar valoresen el localStorage: ${error}`)
        }
    }

    const guardarValorLS = (valorNuevo) => {
        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }
    }
    const eliminarValorLS = (id) => {
        try {
            const nuevoValorAlmacenado = [...valorAlmacenado]
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
            nuevoValorAlmacenado.splice(indice, 1)
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))

        } catch (error) {
            console.error(`Error al eliminar el producto con el id: ${id} en ${clave} del localStorage ${error}`)
        }
    }

    const limpiarLS = () => {
        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }


    return [ guardarValorLS, eliminarValorLS, limpiarLS, guardarValoresLS, valorAlmacenado ]

}