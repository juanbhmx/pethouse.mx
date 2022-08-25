import { useState } from "react"

export default function PublicaPost() {



    // fetch("https://palabras-aleatorias-public-api.herokuapp.com/phrases/random")
    //     .then((r) => r.json())
    //     .then((f) => setPhrase(f.body.randomPhrase))

    // const [phrase, setPhrase] = useState(null)
    // console.log(phrase)
    return (
        <>


            <div className="grid grid-cols-1 gap-2 mb-2">
                <div className="px-4 lg:rounded-lg dark:bg-slate-700">
                    <div className="p-2 dark:border-dark-third flex space-x-4">
                        <img src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="Profile picture" className="w-10 h-10 rounded-full" />
                        <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
                            <span>
                                Que estás pensando?
                            </span>
                        </div>
                    </div>
                    <hr className="border-slate-600"/>
                    <div className="p-2 flex">
                        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-slate-800 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                            <i className="bx bxs-video-plus" />
                            <span className="text-xs text-white sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                        </div>
                        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-slate-800 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                            <i className="bx bx-images" />
                            <span className="text-xs text-white sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                        </div>
                        <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-slate-800 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                            <i className="bx bx-smile" />
                            <span className="text-xs text-white sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                        </div>
                    </div>
                </div>

                {/* <div className="max-w-xl mx-auto px-4 py-4 dark:bg-slate-700 shadow-md rounded-lg">
                    <div className="py-2 flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center">
                            <a href="#" className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                                <img className="rounded-full h-8 w-8 object-cover" src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80" alt="" />
                                <p className="ml-2 text-base dark:text-white font-medium">Juan Bautista</p>
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            </button>




                            <div id="dropdownDotsHorizontal" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                                </div>
                            </div>



                            
                        </div>
                    </div>
                    <div className="py-2 w-">
                        <p className="leading-snug dark:text-slate-200">Nuestro futuro estará determinado, en gran parte, por las decisiones que tomemos ahora.</p>
                    </div>


                    <div>
                        <div className="py-2 flex flex-row items-center">
                            <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 dark:text-slate-200"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                <span className="ml-1 dark:text-slate-200"></span>
                            </button>
                            <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-5 h-5 dark:text-slate-200"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                <span className="ml-1 dark:text-slate-200"></span>
                            </button>
                            <button className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">

                                <span className="ml-1 dark:text-slate-200">Publicar</span> {"  "}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}