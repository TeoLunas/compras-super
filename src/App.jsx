import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Lista from './components/Lista/Lista';
import NavBar from './components/NavBar/NavBar';

import { IoIosAddCircleOutline } from "react-icons/io";


function App() {


  return (
    // <div className='bg-rose-300 grid grid-cols-1 sm:grid-cols-4 gap-x-2 gap-y-3 p-2 grid-flow-row-dense'>
    //   <div className='bg-slate-100 rounded-full shadow-xl w-20 h-20'></div>
    //   <div className='bg-slate-100 rounded-full shadow-xl w-20 h-20'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-sky-500 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-slate-100 rounded-lg shadow-xl min-h-[50px]'></div>
    //   <div className='bg-sky-500 rounded-lg shadow-xl min-h-[50px] col-span-2'></div>
    //   <div className='bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-2'></div>
    // </div>

    <div className="p-2 grid grid-cols-12 grid-rows-12 gap-3 h-screen">
      <div className="bg-teal-500 rounded-lg min-h-[50px] col-span-12">
      </div>
      <div className="bg-indigo-500 rounded-lg min-h-[50px] hidden md:block md:col-span-2 md:row-span-11">
        <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] flex items-center m-1 px-3 gap-2">
        <IoIosAddCircleOutline className='text-2xl'/>
          <p>opcion</p>
        </div>
        <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] flex items-center px-3 gap-2 m-1">
        <IoIosAddCircleOutline className='text-2xl'/>
          <p>opcion</p>
        </div>
        <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] flex items-center px-3 gap-2 m-1">
        <IoIosAddCircleOutline className='text-2xl'/>
          <p>opcion</p>
        </div>
        <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] flex items-center px-3 gap-2 m-1">
        <IoIosAddCircleOutline className='text-2xl'/>
          <p>opcion</p>
        </div>
        <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] flex items-center px-3 gap-2 m-1">
        <IoIosAddCircleOutline className='text-2xl'/>
          <p>opcion</p>
        </div>
        <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px] flex items-center px-3 gap-2 m-1">
        <IoIosAddCircleOutline className='text-2xl'/>
          <p>opcion</p>
        </div>
      </div>
      <div className="bg-pink-500 rounded-lg min-h-[50px] col-span-12 row-span-11 md:col-span-10 md:row-span-11"></div>
    </div>






  )
}

export default App
