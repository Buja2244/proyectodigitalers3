
import { Link, NavLink, useNavigate } from "react-router-dom"
import ItemCarritoInicio from "./ItemCarritoInicio"
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
const Navbar = () => {
  const { carrito, vaciarCarritoContext } = useContext(CarritoContext)

  const navigate = useNavigate()

  const handleComprar = () => {

    if (carrito.length !== 0) {
      navigate('/carrito')
    } else {
      console.log('No hay productos')
    }
  }

  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-white text-sm" to="/">CODESHOP</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white text-sm" to="/contacto">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-sm" to="/nosotros">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-sm" to="/alta">Alta</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-secondary text-white text-sm" type="submit">Buscar</button>
            </form>
            <div className="d-flex">
              <div className="d-flex">
                <div className="dropdown dropstart">
                  <button type="button" className='btn btn-link' data-bs-toggle="dropdown" aria-expanded="false">
                    <span style={{ color: 'whitesmoke' }}>
                      <i className="fa-solid fa-cart-shopping fa-xl fa-beat" style={{ '--fa-animation-duration': '2s' }}></i>
                    </span>
                  </button>

                  <ul id="carrito" className="dropdown-menu mx-2">
                    <table id="lista-carrito" className="table">
                      <thead>
                        <tr>
                          <th scope="col">Imagen</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          carrito && carrito.map(item => (
                            <ItemCarritoInicio key={item.id} item={item} />
                          ))
                        }
                      </tbody>
                    </table>
                    <div className="d-grid gap-2 d-md-block justify-content-md-center ms-1">
                      <button id="vaciar-carrito" className="btn btn-danger" onClick={handleVaciarCarrito}>Vaciar Carrito
                      </button>
                      <button id="procesar-pedido" className="btn btn-success" onClick={handleComprar} disabled={carrito.length === 0}>Procesar Compra
                      </button>
                    </div>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
