import Slider from "./common/Slider"

const Home = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-gradient-to-b from-white to-cyan-100 flex flex-col items-center">
      <div className="w-[80%] text-center flex flex-col justify-center items-center mt-16">
        <h1 className="text-6xl font-bold">Musical Hendrix</h1>
        <p className="w-[80%] mt-3">Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de
          experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las
          mejores elecciones para tu compra musical.</p>
      </div>

      <div className="w-[100%] mt-10">
        <Slider />
      </div>
    </div>
  )
}

export default Home