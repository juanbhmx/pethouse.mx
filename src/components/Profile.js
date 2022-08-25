/* eslint-disable jsx-a11y/anchor-is-valid */
import ConfUser from './confProfile'
import PubPost from './PubPost'
export default function ProfileUser() {
    return (
        <>
            <div className="lg:container md:container xl:container h-screen mx-auto lg:my-2 md:my-2 xl:my-2 mb-40">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full  md:w-3/12 md:mx-2">
                        <div className="dark:bg-slate-700 lg:rounded-lg md:rounded xl:rounded p-3">
                            <div className='relative h-full'>
                                <div className='overflow-hidden h-40'>
                                    <img className="rounded-t-lg " src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="portada" />
                                </div>
                                <div className="mt-2 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/1 bg-slate-600 rounded-full">
                                    <img className="p-1 w-32 h-32 rounded-full ring-2 ring-gray-300 dark:ring-green-400" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="profile" />
                                </div>
                            </div>
                            <h1 className="text-white font-bold mt-16 text-xl leading-8 text-center">Juan Bautista</h1>
                            <h3 className="text-gray-300 text-sm font-sm text-center mb-2">Front End Developer</h3>
                            <div className='text-center mb-2 flex justify-center'>
                                <button type="button" class="flex py-2 px-3 mx-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                                </button>
                                <button type="button" class="flex py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                                    Mensaje
                                </button>
                                <button type="button" class="flex py-2 mx-1 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    
                                </button>
                            </div>

                            <p className="text-sm text-gray-300 text-justify hover:text-gray-400 leading-6">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                            <ul className="dark:bg-slate-600 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                {/* <li className="flex items-center py-3">
                                    <span className="text-white">Estatus</span>
                                    <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Activo</span></span>
                                </li> */}
                                <li className="flex items-center py-3">
                                    <span className="text-white">Antiguedad</span>
                                    <span className="ml-auto text-gray-300">24 Junio 1999</span>
                                </li>
                            </ul>
                        </div>

                        <div className="sm:hidden md:block bg-white p-3 hover:shadow rounded-lg dark:bg-slate-700 mt-2">
                            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                <span className="text-green-500">
                                    <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </span>
                                <span className="text-white">Similar Profiles</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt="" />
                                    <a href="#" className="text-main-color">Kojstantin</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg" alt="" />
                                    <a href="#" className="text-main-color">James</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="" />
                                    <a href="#" className="text-main-color">Natie</a>
                                </div>
                                <div className="text-center my-2">
                                    <img className="h-16 w-16 rounded-full mx-auto" src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png" alt="" />
                                    <a href="#" className="text-main-color">Casey</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="sm:mt-2 md:mt-0 w-full md:w-9/12 h-64 static ">

                        <div className="shadow-lg dark:bg-slate-700 lg:rounded-lg md:rounded-lg xl:rounded-lg">
                            <PubPost />
                            <ConfUser />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}