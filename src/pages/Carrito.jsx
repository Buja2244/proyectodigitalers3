import { useContext, useEffect } from 'react'
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from '../components/ItemCarrito'



const Carrito = () => {
  const {carrito, cantidadArticulosCarritoContext, totalFinal, guardarCarritoContext} = useContext(CarritoContext)

  useEffect(() => {
    document.title = "CodeShop - Carrito"
  })

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header py-4">
              <h2 className="mb-0">Productos - {cantidadArticulosCarritoContext()}</h2>
            </div>
            <div className="card-body" id="lista-compra">
              {
                carrito && carrito.map(item => (
                  <ItemCarrito key={item.id} item={item} />
                ))
              }
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h2 className="mb-0">Resumen</h2>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <strong className='precio'>Productos: ${totalFinal-((totalFinal*27)/100).toFixed(0)}</strong>
                  <span id="sub-total"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <strong className='precio'>Envío: Gratis</strong>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong className='precio'>IVA: ${((totalFinal*27)/100).toFixed(0)}</strong>
                  </div>
                  <p><strong id="iva"></strong></p>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong className='precio'>Total: ${totalFinal}</strong>
                    <strong className='precio'> (IVA Incluido)</strong>
                  </div>
                  <p><strong id="total"></strong></p>
                </li>
              </ul>
              <button type="button" className="btn btn-success btn-lg btn-block mt-4 mx-auto"
              onClick={guardarCarritoContext}>Procesar Compra</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
      <h2>Medios de Pago</h2>
      <img className="pago img-fluid w-100" src="/img/pago.webp" alt="Tarjetas y medios de pago aceptados"/>
    </div>
    </section>
  )
}

export default Carrito