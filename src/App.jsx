import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Lista from './components/Lista/Lista';
import NavBar from './components/NavBar/NavBar';

import { IoIosAddCircleOutline } from "react-icons/io";
import CrearProducto from './components/productos/crearProducto/CrearProducto';


function App() {


  return (
    <div className="p-2 grid grid-cols-12 grid-rows-12 gap-3 h-screen">
      {/* <div className="bg-teal-500 rounded-lg col-span-12"> */}
      <div className="rounded-lg col-span-12">
        <NavBar />
      </div>
      <div className="bg-indigo-500 rounded-lg min-h-[50px] hidden md:block md:col-span-2 md:row-span-11">
      </div>
      <div className="bg-pink-500 rounded-lg min-h-[50px] col-span-12 row-span-11 md:col-span-10 md:row-span-11">
       
      </div>
    </div>






  )
}

export default App
