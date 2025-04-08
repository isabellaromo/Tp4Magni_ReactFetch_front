import { Link } from "react-router-dom"
import { Instrumento } from "../types/Instrumento"
import Button from "./common/Button"

const Item = ({ instrumento }: { instrumento: Instrumento }) => {

  return (
    <>
    <div className="flex flex-col">
      <div className="w-[600px] flex gap-3">
        <div className="flex justify-center items-center">
          <img className="w-[80%]" src={`/img/${instrumento.imagen}`} alt={`Imagen de ${instrumento.descripcion}`} />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-gray-800 font-light">{instrumento.instrumento}</h3>
          <p className="text-2xl font-medium">${instrumento.precio}</p>
          <p className={`${instrumento.costoEnvio === "G" ? "text-green-600" : "text-orange-600"} text-sm mt-3`}>
            {instrumento.costoEnvio === "G" ? "Envío gratis a todo el país" : `Costo de envío: $${instrumento.costoEnvio}`}</p>
          <p className="text-sm text-gray-500">{instrumento.cantidadVendida} vendidos</p>
          <div className="mt-3">
            <Link to={`/productos/detalle/${instrumento.id}`}>
              <Button text={"Ver detalle"} width="w-100px" height="h-30px" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-5 text-gray-200"/>
    </div>
    </>
  )
}

export default Item