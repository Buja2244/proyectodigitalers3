import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CarritoContext from "../contexts/CarritoContext"

const Card = ({ producto }) => {

  const { agregarCarritoContext } = useContext(CarritoContext)

  const handleComprar = (producto) => {
    console.log('Comprando -> ', producto)
    agregarCarritoContext(producto)
  }


  return (
    <div className="card col-3 m-3 shadow-sm">
      <Link href="pages/Motorola-E13.html">
        <img src={producto.foto} className="card-img-top img-fluid w-100" alt="Smartphone Motorola E13" />
      </Link>
      <div className="card-body">
        <h5 className="card-title text-sm">{producto.nombre}</h5>
        <ul className="list-unstyled mt-3 mb-4">
          <li className="list-group-item text-sm">Ram: 4GB</li>
          <li className="list-group-item text-sm">Precio: ${producto.precio}</li>
        </ul>
        <button className="btn btn-primary agregar-carrito" onClick={() => handleComprar(producto)}>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default Card