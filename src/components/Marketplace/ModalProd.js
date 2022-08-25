import Avatar from '../Avatar'
import { useState } from 'react';

export default function ModalProd(props) {
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
            product: "Apple Watch Series 7 GPS ",
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
    return (
        <>
            {dataMarket.filter(product => product.id == props.idprod).map(product => (
                <div id="modalproddetalle" key={product.id} className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-lg overflow-y-auto overflow-x-hidden fixed  items-center">

                    <div key="modal" className="relative p-4 w-full max-w-4xl h-full md:h-auto">

                        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                            <a href="#">
                                <img className="object-cover w-full rounded-lg mb-4 p-1" src={product.photo} alt={product.product} />
                            </a>
                            <div key="desc" className="px-5 pb-5">
                                <a>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.product}</h5>
                                </a>
                                <div key="rating" className="flex items-center mt-2.5 mb-5">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                </div>
                                <div key="price" className="flex justify-between items-center">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </a>
                                </div>

                                <hr className="border-slate-600 mt-4 mb-4" />
                                <Avatar />
                                <h5 className="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">Descripción:</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <hr className="border-slate-600 mt-4 mb-4" />

                                <form>

                                    <div className="relative">
                                        <div className="flex absolute text-green-400 inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                                        </div>
                                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="¿Aún está disponible?" required />
                                        <button type="submit" className="text-white rounded-lg absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envíar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            ))
            }
        </>
    )
}