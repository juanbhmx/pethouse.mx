import Mapa from './Help/Map'
export default function Help() {
    return (
        <>
            <div className="container h-screen mx-auto">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* <div className="w-full  md:w-4/12 md:mx-2">
                        <div className="dark:bg-slate-700 rounded-lg p-3 border-t-4 border-green-400 ">
                            Ayuda Urgente
                            <div className="border-b border-gray-300"></div>
                            cards urgentes
                        </div>
                    </div> */}
                    <div className="w-full md:w-9/12 absulote">
                        <div className=" shadow-lg dark:bg-slate-700 rounded-lg ">
                            {/* card recien publicado
                            mapa, ayudas urgentes ubicaciones */}

                            <Mapa />
                        </div>
                        <div className="rounded-t-xl block fixed inset-x-0 bottom-14 p-5 z-10 bg-slate-700 text-white border-t-2 border-green-400 lg:bottom-0 xl:bottom-0 md:bottom-0">
                            <div className='flex h-8 mb-5'>
                                <svg className="w-6 h-6 mt-1 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                                <h4 className='font-bold mb-5 text-xl ml-2'>Ayuda Urgente</h4>
                                <button type="button" className="ml-auto px-3 shadow-lg text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Pedir Ayuda
                                </button>
                            </div>
                            <div>
                                <p className='ml-8 flex'>
                                    <svg className="w-4 h-4 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    5 Perros en peligro
                                </p>
                                <p className='ml-8 flex'>
                                    <svg className="w-4 h-4 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    5 Gatos en peligro
                                </p>

                            </div>
                            <div className='flex mt-10'>
                                <p className='ml-auto flex mr-2 text-gray-300 text-sm'>Cerca de tu área:</p>
                                <svg className="w-3 h-3 mt-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                <p className='text-gray-400 text-sm'>(Monterrey, Nuevo León)</p>
                                
                            </div>
                        </div>

                    </div>
                    {/* <div className="w-full  md:w-4/12 md:mx-2">
                        <div className="dark:bg-slate-700 rounded-lg p-3 border-t-4 border-green-400 ">
                            Ayudados
                            <div className="border-b border-gray-300"></div>
                            cards ayudados foto ayuda y calificación rescatista
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}