import { useEffect, useState } from "react"
import Item from "./Item"
import { InstrumentoArray } from "../types/InstrumentoArray"

const List = () => {
  const [listaInstrumentos, setListaInstrumentos] = useState<InstrumentoArray | null>(null)

  //Traemos los datos del JSON
  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:8080/instrumento/get")

        if (!response.ok) {
          throw new Error(`Status ${response.status}`)
        }

        const responseJSON: InstrumentoArray = await response.json()

        if (responseJSON) {
          setListaInstrumentos(responseJSON)
        } else {
          setListaInstrumentos(null)
        }

      } catch (error: unknown) {
        console.log("Hubo un error al realizar el fetch: ", error)
      }
    }

    getData()
  }, [])

  return (
    <div className="w-[100vw] flex justify-center">
      {/*Chequeamos que el array sea efectivamente un array y que tiene contenido*/}
      {Array.isArray(listaInstrumentos) && listaInstrumentos.length > 0 ? 
      (<ul className="list-none mt-10 flex flex-col gap-10">
        {listaInstrumentos.map(instrumento => (
          <li key={instrumento.id}> <Item instrumento={instrumento}/> </li>
        ))}
      </ul>) : (<p>No hay instrumentos disponibles</p>)}
    </div>
  )
}

export default List