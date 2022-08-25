import { useState, useEffect } from 'react'
import pto from '../../img/prod.jpg'
import ModalProd from './ModalProd';
import Filter from './Filter'
export default function MarketPlace() {
    const [option, setOption] = useState(1);
    const [id_prod, setIdprod] = useState(0)
    const [show, setShow] = useState(false)
    console.log(show);




    useEffect(() => {
        window.addEventListener("click", (event) => {
            const isSidebar = event.target.closest("#modalproddetalle")
            if (isSidebar) return;
            setShow(false)
        })
    })




    const dataMarket = [
        {
            id: 1,
            photo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_MX?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1654014006527",
            product: "MacBook Air Apple MGN63LA/A M1 8GB RAM 256GB SSD",
            price: "22,989",
            location: "Monterrey, NL"
        },
        {
            id: 2,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1dyz3GZC2SPGAE8UWlAnZhrRYViEyL8hm6WqeZMm4mWdEgp7OBIV57f8p5G2IzzB3ro&usqp=CAU",
            product: "Minino Plus +",
            price: "3,989",
            location: "Michoacan, Juarez"
        }, {
            id: 3,
            photo: "https://definicion.de/wp-content/uploads/2021/08/as.jpg",
            product: "Alimento barato",
            price: "1,989",
            location: "Escobedo, NL"
        },
        {
            id: 4,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fvwV6BcuujRn-HbinvP2EFvvVfZqzWn3wOlDjmoE21y7iMDjOJBTw5J8uaBOjUd_GLQ&usqp=CAU",
            product: "MacBook 2022",
            price: "22,989",
            location: "Juarez, NL"
        },
        {
            id: 5,
            photo: "https://t1.ev.ltmcdn.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg",
            product: "MacBook 2022",
            price: "22,989",
            location: "Careyta, NL"
        }, {
            id: 6,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysWhFUTIqUwIeDcW3IQVZvMYtEaqWG_X16jvd-4qKuC8d_wM1TRX_IvNgsRODuX2sQNY&usqp=CAU",
            product: "MacBook 2022",
            price: "22,989",
            location: "San pedo Garza, NL"
        },
        {
            id: 7,
            photo: "https://www.consumer.es/app/uploads/2021/12/mascotas-conejillo-indias.jpg",
            product: "MacBook 2022",
            price: "22,989",
            location: "San nicolas, NL"
        },
        {
            id: 8,
            photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg",
            product: "MacBook 2022",
            price: "22,989",
            location: "Garcia, NL"
        }, {
            id: 9,
            photo: "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
            product: "MacBook 2022",
            price: "22,989",
            location: "Monterrey, NL"
        },
        {
            id: 10,
            photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg",
            product: "MacBook 2022",
            price: "22,989",
            location: "San pedro, NL"
        },

        {
            id: 11,
            photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg", product: "MacBook 2022",
            price: "22,989",
            location: "Santiago, NL"
        }, {
            id: 12,
            photo: "https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg",
            product: "MacBook 2022",
            price: "22,989",
            location: "Monterrey, NL"
        },
    ];

    const Categoria = (
        <div className="overflow-y-auto py-4 px-3 rounded-lg dark:bg-slate-700">
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                        <span className="ml-3">Juguetes</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Ropa</span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300" _msthash={1851889} _msttexthash={32123}>Pro</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Rascadores</span>
                        <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200" _msthash={1852162} _msttexthash={4641}>3</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Alimento</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Accesorios</span>
                    </a>
                </li>
            </ul>
        </div>
    );
    const Filtros = (

        <div className="overflow-y-auto py-4 px-3 rounded-lg dark:bg-slate-700">
            {/* <span className="ml-5">Rango de precio</span> */}
            <ul className="space-y-2">
                <li>
                    <div>
                        <label htmlFor="steps-range" className="block mb-2 font-medium text-green-400 dark:text-white">Maxímo: $4,556</label>
                        <input id="steps-range" type="range" min={0} max={5} defaultValue="2.5" step="0.5" className="w-full h-2 bg-green-400 rounded-lg appearance-none cursor-pointer dark:bg-green-400" />
                    </div>
                </li>
                <li>
                    <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Ubicación</span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-green-700 dark:text-white">Mi Ubicación</span>
                    </a>
                </li>
            </ul>
        </div>

    )
    const TiendasOff = (
        <div className="overflow-y-auto py-4 px-3 rounded-lg dark:bg-slate-700">
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Pet Accesorios</span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-green-700 dark:text-white">Estrellas</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Cat Show</span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-green-700 dark:text-white">Estrellas</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-slate-600 dark:hover:bg-gray-00">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Dog Max "verificado"</span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-green-700 dark:text-white">Estrellas</span>
                    </a>
                </li>
            </ul>
        </div>
    )
    const Productos = (
        <div>



            <div className="flex my-5 mx-5">
                <div className="flex-none ...">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Productos
                        
                    </h5>
                </div>
                <div className="flex-auto w-64 ...">
                    
                </div>
                <div className="flex-auto w-32 justify-end">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                </div>
            </div>

            <hr className="border-slate-600" />
            <div className="flex items-center">

                <div className="max-w-7xl w-full mx-auto py-2">
                    <div className="flex flex-wrap lg:flex-row  lg:flex-row space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                        {dataMarket.map(({ product, price, location, photo, id }) => (
                            <div key={id} className="w-full lg:w-1/6 " onClick={() => setShow(true)}>
                                <div className="mt-2 border border-gray-700 text-white shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-lg ">
                                    <img className="object-cover w-full rounded-lg h-40" src={photo} alt={product} />
                                    <div className="mx-5 my-2">
                                        <h5 className="text-xl cursor-pointer" onClick={() => setIdprod(id)}>{product}</h5>
                                        <h5 className="">${price}</h5>
                                        <a href='' className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white">
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            <h5 className="flex-1 ml-1 whitespace-nowrap text-gray-400 m-5">{location}</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* {show ? <ModalProd/> : null} */}

                        <ModalProd idprod={id_prod} show={show} />
                    </div>
                </div>
            </div>
        </div>

    )


    return (
        <>
            <div className="container h-screen mx-auto my-4 ">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full  md:w-3/12 md:mx-2">
                        <div className="dark:bg-slate-700 rounded-lg p-3 border-t-4 border-green-400 ">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mx-5 my-5">
                                Marketplace
                            </h5>
                            <hr className="border-slate-600" />
                            <h5 className="text-green-400 cursor-pointer text-lg font-bold leading-none text-green-400 dark:text-green-400 mx-5 my-5">
                                Categoria
                                {Categoria}
                            </h5>
                            <h5 className="cursor-pointer text-lg font-bold leading-none text-gray-900 dark:text-green-400 mx-5 my-5">
                                Filtro
                                {Filtros}
                            </h5>
                            <h5 className="cursor-pointer text-lg font-bold leading-none text-gray-900 dark:text-green-400 mx-5 my-5">
                                Tiendas oficiales
                                {TiendasOff}
                            </h5>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="sm:mt-2 md:mt-0 w-full md:w-9/12 h-64 static ">
                        <div className="p-2 shadow-lg dark:bg-slate-700 rounded-lg">
                            <form>

                                <div className="relative">
                                    <div className="flex absolute text-green-400 inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </div>
                                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alimento para gato de 1 mes" required />
                                    <button type="submit" className="text-white rounded-lg absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>

                                </div>
                            </form>
                            {Productos}

                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}