import Map from "./common/Map"

const DondeEstamos = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center mt-10 bg-gradient-to-b from-white to-cyan-100">
      <h3 className="font-bold mb-5">Dónde Estamos</h3>
      <Map />
    </div>
  )
}

export default DondeEstamos