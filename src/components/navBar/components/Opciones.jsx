import { IoIosAddCircleOutline } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { FaRegUser, FaRegListAlt } from "react-icons/fa";

const Opciones = () => {
    return (
        <ul className='flex gap-2 items-center'>
            <li>
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
        </ul>
    )
}

export default Opciones