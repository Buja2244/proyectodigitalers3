import { useEffect } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Contacto = () => {

  useEffect(() => {
    document.title = "CodeShop - Contacto"
  })

  return (
    <div className="col mt-5">
      <div className="text-center">
        <i className="fa-solid fa-map fa-xl"></i>
        <h4>Nuestra direccion</h4>
        <p>Direccion 1</p>
      </div>
      <div className="text-center mt-5">
        <i className="fa-solid fa-envelope fa-xl my-2"></i>
        <h4>Contactanos via Mail</h4>
        <p>maildeejemplo@digi.com</p>
      </div>
      <div className="text-center mt-5">
        <i className="fa-solid fa-phone fa-xl"></i>
        <h4>Llamanos</h4>
        <p>(+54) 111 222 3333</p>
      </div>
      <div className="text-center mt-5">
        <i className="fa-solid fa-clock fa-xl"></i>
        <h4>Horarios de atencion</h4>
        <p>Lun - Vie: 08.00 - 16.00. <br/>Sab: 10.00 - 14.00</p>
      </div>
    </div>
  )
}

export default Contacto