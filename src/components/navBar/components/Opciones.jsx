import { IoIosAddCircleOutline } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { FaRegUser, FaRegListAlt } from "react-icons/fa";
import { useState } from "react";
import CrearProducto from "../../productos/crearProducto/CrearProducto";

const Opciones = () => {
    const [openMododalAddProduct, setOpenMododalAddProduct] = useState(false);

    const handleOpenModal = () => setOpenMododalAddProduct(!openMododalAddProduct);

    return (
        <ul className='flex gap-2 items-center'>
            <li onClick={handleOpenModal}>
                <IoIosAddCircleOutline className='text-2xl cursor-pointer' />
            </li>
            <li>
                <GrView className='text-2xl cursor-pointer' />
            </li>
            <li>
                <FaRegUser className='text-2xl cursor-pointer' />
            </li>
            <li>
                <FaRegListAlt className='text-2xl cursor-pointer' />
            </li>

            {
                openMododalAddProduct && <CrearProducto />
            }
        </ul>
    )
}

export default Opciones