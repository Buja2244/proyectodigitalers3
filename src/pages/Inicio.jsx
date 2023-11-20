import { useContext, useEffect } from 'react'
import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'
import Carrusel from '../components/Carrusel'
const Inicio = () => {
  const {productos} = useContext(ProductosContext)

  useEffect(() => {
    document.title = "CodeShop"
  },[])
  return (
    <div>

      <Carrusel />
      
      <section className="row m-1 justify-content-center">
        {productos &&
          productos.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
      </section>
      
    </div>
  )
}

export default Inicio