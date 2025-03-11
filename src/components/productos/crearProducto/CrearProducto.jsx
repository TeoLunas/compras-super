const CrearProducto = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] px-3 py-4 w-72">
                <div className="flex flex-col">
                    <label htmlFor="" className="text-lg mx-2">Comprar</label>
                    <input type="text" className="mt-2 rounded-lg p-2 outline-none bg-red-200 shadow-sm" />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="text-white py-2 px-4 rounded-lg ">
                        CANC
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
}


export default CrearProducto