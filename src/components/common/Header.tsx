import { Link } from "react-router-dom"

const Header = () => {
  return (
  <div className="bg-gray-800 w-[100%] h-[70px] flex justify-between items-center text-white pl-8 pr-8">
      <Link to="/">
        <p className="font-black">Musical Hendrix</p>
      </Link>
      <ul className="flex gap-8">
        <li className="hover:scale-110 transition"><Link to="/">Home</Link></li>
        <li className="hover:scale-110 transition"><Link to="/ubicacion">Dónde Estamos</Link></li>
        <li className="hover:scale-110 transition"><Link to="/productos">Productos</Link></li>
      </ul>
    </div>
  )
}

export default Header