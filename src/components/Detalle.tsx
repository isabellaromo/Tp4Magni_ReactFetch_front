import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Instrumento } from "../types/Instrumento"
import Button from "./common/Button"

const Detalle = () => {
  const { id } = useParams<{ id: string }>()
  const [instrumento, setInstrumento] = useState<Instrumento | null>(null)

  useEffect(() => {
    const getInstrument = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:8080/instrumento/get/${id}`)

        if (!response.ok) {
          throw new Error("Error al realizar el fetch")
        }

        const responseJSON: Instrumento = await response.json()
        setInstrumento(responseJSON)
      } catch (error) {
        console.log(error)
      }
    }

    getInstrument()
  }, [id])

  return (
    (instrumento ? <div className="w-[100%] h-[100vh] flex justify-center">
      <div className="w-[90%] h-[60%] flex mt-20">
        <div className="w-[60%] flex flex-col justify-between">
          <img className="self-center h-[65%]" src={`../../public/img/${instrumento.imagen}`} alt={`Imagen de producto ${instrumento.instrumento}`} />
          <p className="text-sm italic text-gray-600">Descripción: <br /> {instrumento.descripcion}</p>
        </div>
        <div className="w-[40%] border-r-2 border-r-gray-300 border-l-2 border-l-gray-300 pl-5 pr-5 mt-10">
          <p className="text-sm text-gray-500">{instrumento.cantidadVendida} vendidos</p>
          <h2 className="text-xl font-bold mt-2">{instrumento.instrumento}</h2>
          <p className="text-4xl mt-3">${instrumento.precio}</p>
          <div className="text-sm mt-3 italic text-gray-600">
            <p>Marca: {instrumento.marca}</p>
            <p>Modelo: {instrumento.modelo}</p>
          </div>
          <div className="text-sm mt-5">
            <p>Costo envío:</p>
            <p className={`${instrumento.costoEnvio === "G" ? "text-green-600" : "text-orange-600"}`}>
            {instrumento.costoEnvio === "G" ? "Envío gratis" : `Costo de envío: $${instrumento.costoEnvio}`}</p>
          </div>
          <div className="mt-10">
            <Button text="Agregar al Carrito" width="w-[150px]" height="h-[40px]"/>
          </div>
          
        </div>
      </div>

    </div> : null)

  )
}

export default Detalle