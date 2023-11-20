import React, { useEffect, useState, useContext } from 'react'
import { useForm } from '../hooks/useForm'
import CarritoContext from '../contexts/CarritoContext'


const ItemCarrito = ({ item }) => {
    const { cambiarCantidadCarritoContext, eliminarProductoCarritoContext } = useContext(CarritoContext)

    let precioCantidadInicial = item.precio * item.cantidad

    const [total, setTotal] = useState(precioCantidadInicial)

    const [producto, handleChange] = useForm({
        cantidad: item.cantidad
    })

    useEffect(() => {
        let totalRecalculado = Number(item.precio * producto.cantidad).toFixed(0)
        setTotal(totalRecalculado)
        item.cantidad=producto.cantidad
        cambiarCantidadCarritoContext(item)
    
    }, [producto.cantidad])

    return (
        <div className='row py-3 mb-3'>
            <div className="col-4 mb-1">
                <div className="bg-image rounded">
                    <img className="w-100" src={item.foto} alt={item.nombre} />
                </div>
            </div>
            <div className="col-6">
                <p><strong>{item.nombre}</strong></p>
                <p>{item.color}</p>
                <p>{item.caracteristicas}</p>
                

                <button className="btn-sm me-1 mb-2 fa-solid fa-trash-can text-danger border-0 bg-transparent" onClick={()=> eliminarProductoCarritoContext(item.id)}></button>

            </div>
            <div className="col-2">
                <input
                    type="number"
                    min="1"
                    className="form-control text-center"
                    placeholder="Cantidad"
                    name="cantidad"
                    value={producto.cantidad}
                    onChange={handleChange} />
                <p className="text-center mt-4">
                    <strong className="precio">${total}</strong>
                </p>
            </div>
        </div>
    )
}

export default ItemCarrito