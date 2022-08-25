import React, { useState } from "react";
import Amigos from './ActiveFriend'
import Messages from "./Messages";
import AllFriends from "./AllFriends";
export default function MenuDer() {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div className="">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mx-5 my-5">
            {activeStatus == 1 ? "Activos" : null}
            {activeStatus == 2 ? "Mensajes" : null}
            {activeStatus == 3 ? "Amigos" : null}
            </h5>
            <div className="">
                <div className="sm:hidden relative w-11/12 mx-auto bg-slate-600 text-white rounded">
                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 9 12 5 16 9" />
                            <polyline points="16 15 12 19 8 15" />
                        </svg>
                    </div>
                    <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-white appearance-none bg-transparent relative z-10">
                        <option className="text-sm text-white">inactive </option>
                        <option className="text-sm text-white">inactive </option>
                        <option defaultValue className="text-sm text-white">
                            Active{" "}
                        </option>
                        <option className="text-sm text-white">inactive </option>
                        <option className="text-sm text-white">inactive </option>
                    </select>
                </div>
                <div className="xl:w-full xl:mx-0 h-12 hidden sm:block rounded">
                    <ul className="flex border-b px-5">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm border-green-400 pt-3 rounded-t text-white mr-12" : "text-sm text-white py-3 flex items-center mr-12 hover:text-white cursor-pointer"}>
                            <div className="flex items-center mb-3">
                                <span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"  strokeWidth="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                </span>
                                <span className="ml-1 font-normal">Activos</span>
                            </div>
                            {activeStatus == 1 && <div className="w-full h-1 bg-green-400 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm border-green-400 pt-3 rounded-t text-white mr-12" : "text-sm text-white py-3 flex items-center mr-12 hover:text-white cursor-pointer"}>
                            <div className="flex items-center mb-3">
                                <span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                </span>
                                <span className="ml-1 font-normal">Mensajes</span>
                                
                            </div>
                            {activeStatus == 2 && <div className="w-full h-1 bg-green-400 rounded-t-md" />}
                        </li>
                        {/* <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm border-green-400 pt-3 rounded-t text-white mr-12" : "text-sm text-white py-3 flex items-center mr-12 hover:text-white cursor-pointer"}>
                            <div className="flex items-center mb-3">
                                <span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </span>
                                <span className="ml-1 font-normal">Amigos</span>
                            </div>
                            {activeStatus == 3 && <div className="w-full h-1 bg-green-400 rounded-t-md" />}
                        </li> */}
                    </ul>

                </div>
                <ul className="dark:bg-slate-700">
                    <li className="text-sm border-green-400 pt-3 rounded-t text-white mx-5 mr-12">
                        {activeStatus == 1 ? <Amigos /> : null}
                        {activeStatus == 2 ? <Messages/> : null}
                        {/* {activeStatus == 3 ? <AllFriends/> : null} */}
                    </li>
                </ul>
            </div>
        </div>
    );
};
