import { Routes, Route } from 'react-router-dom'
import List from './components/List'
import Home from './components/Home'
import Header from './components/common/Header'
import DondeEstamos from './components/DondeEstamos'
import Detalle from './components/Detalle'

function AppRouter() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<List />} />
        <Route path="/ubicacion" element={<DondeEstamos />} />
        <Route path="/productos/detalle/:id" element={<Detalle />} />
      </Routes>
    </>
  )
}

export default AppRouter
