import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { FaRegUser, FaRegListAlt } from "react-icons/fa";


const NavBar = () => {
    return (
        <nav className='flex justify-between items-center px-5 h-16'>
            {/* Menu opciones */}
            <ul className='flex gap-2 items-center'>
                <li>
                    <IoIosAddCircleOutline className='text-2xl' />
                </li>
                <li>
                    <GrView className='text-2xl' />
                </li>
                <li>
                    <FaRegUser className='text-2xl' />
                </li>
                <li>
                    <FaRegListAlt className='text-2xl' />
                </li>
            </ul>
            {/* Icono usuario */}
            <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-red-400 flex items-center justify-center'>
                    <p className='text-center text-white'>TL</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar