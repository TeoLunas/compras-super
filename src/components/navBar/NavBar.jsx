import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import UserMenu from './components/UserMenu';
import Opciones from './components/Opciones';


const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); 

    const handleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='flex justify-between items-center px-5 h-16'>
            {/* Menu opciones */}
            <Opciones />
            {/* Icono usuario */}
            <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-red-400 flex items-center justify-center relative'>
                    <p className='text-center text-white' onClick={handleMenu}>TL</p>

                     {/* Menu usuario */}
                     {
                        menuOpen && (
                            <div ref={menuRef}>
                                <UserMenu />
                            </div>
                        )
                    }
                </div>
            </div>



        </nav>
    )
}

export default NavBar