import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const UserMenu = () => {
    return (
        <div className='absolute top-10 right-0'>
            <div className='bg-slate-100 rounded-lg shadow-xl shadow-inherit h-32 w-32 p-2'>
                <div className='hover:bg-slate-300 w-auto flex items-center gap-1 rounded-md p-1 cursor-pointer'>
                    <IoIosLogOut className='text-red-500 text-sm font-bold' />
                    <p className='text-center text-red-500 text-sm font-bold '>Cerrar sesion</p>
                </div>
            </div>
        </div>
    )
}

export default UserMenu