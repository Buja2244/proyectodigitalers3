import { useEffect } from 'react'
import './Nosotros.css'

const Nosotros = () => {

  useEffect(() => {
    document.title = "CodeShop - Nosotros"
  })
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h1 className="titulo-destacado">Sobre <span>nosotros</span></h1>
          <h3 className="text-center">Si estás buscando un nuevo teléfono móvil, ¡Codeshop es el lugar perfecto para ti!</h3>
          <p style={{ textAlign: 'justify' }}>Somos tienda de celulares que ofrece una amplia variedad de dispositivos móviles y accesorios. Con su plataforma de pago seguro, puedes comprar tus productos favoritos de forma rápida y sencilla. Además, contamos con un equipo de expertos en tecnología que te brindarán asesoramiento personalizado para que puedas encontrar el dispositivo perfecto para ti. ¡No dudes en visitarnos!</p>

          <h3 className="estiloletra text-center">Nuestras Redes</h3>
          <div className="text-center">
            <ul>
              <a href="https://facebook.com"><span style={{ fontSize: '4em', color: '#1877f2' }}>
                <i className="fa-brands fa-facebook-square fa-xs fb"></i>
              </span></a>
              <a href="https://twitter"><span style={{ fontSize: '4em', color: '#1da1f2' }}>
                <i className="fa-brands fa-twitter-square fa-xs"></i>
              </span></a>
              <a href="https://instagram.com" display="inline-block"><span style={{ fontSize: '4em', color: '#fd1d1d' }}>
                <i className="fa-brands fa-instagram-square fa-xs"></i>
              </span></a>
              <a href="mailto:max@gmail.com"><span style={{ fontSize: '3.1em', color: '#1877f2' }}>
                <i className="fa fa-envelope-square fa-xs"></i>
              </span></a>
            </ul>
          </div>
        </div>

        <div className="col-md-7">
          <div className="nosotros-imagen">
            <img className="img-fluid imagenredondeada" src="/img/office.webp" alt="Foto que representa nuestro emprendimiento" />
          </div>
        </div>
      </div>
    </div>
    )
  }

export default Nosotros