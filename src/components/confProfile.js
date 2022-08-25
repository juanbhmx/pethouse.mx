import { useState } from "react";
import PostUser from './GaleriaPost'
import AmigosPro from './Profile/Friends'
export default function ConfUser() {
    const [option, setOption] = useState(1);

    return (
        <>
            <div className="static mb-16">
                <div className="mb-4 flex justify-center">
                    <ul className="flex flex-wrap text-sm font-medium text-center" id="myTab" >
                        <li className="mr-2" role="presentation" onClick={() => setOption(1)}>
                            <button className={option == 1 ? "inline-block p-4 rounded-t-lg border-b-2 text-green-400 hover:text-green-400 dark:text-green-400 dark:hover:text-green-400 border-green-400 dark:border-green-400" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"} id="profile-tab" >Publicaciones</button>
                        </li>
                        <li className="mr-2" role="presentation" onClick={() => setOption(2)}>
                            <button className={option == 2 ? "inline-block p-4 rounded-t-lg border-b-2 text-green-400 hover:text-green-400 dark:text-green-400 dark:hover:text-green-400 border-green-400 dark:border-green-400" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"} id="dashboard-tab">Ayuda</button>
                        </li>
                        {/* <li className="mr-2" role="presentation" onClick={() => setOption(3)}>
                            <button className={option == 3 ? "inline-block p-4 rounded-t-lg border-b-2 text-green-400 hover:text-green-400 dark:text-green-400 dark:hover:text-green-400 border-green-400 dark:border-green-400" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"} id="settings-tab" >Configuración</button>
                        </li> */}
                        <li className="mr-2" role="presentation" onClick={() => setOption(4)}>
                            <button className={option == 4 ? "inline-block p-4 rounded-t-lg border-b-2 text-green-400 hover:text-green-400 dark:text-green-400 dark:hover:text-green-400 border-green-400 dark:border-green-400" : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"} id="settings-tab" >Amigos</button>
                        </li>
                    </ul>
                </div>
                {/* <div id="myTabContent" _msthidden={4}> */}
                <div className=" bg-gray-500 lg:rounded-lg md:rounded-lg xl:rounded-lg dark:bg-gray-800 overflow-y-auto ">
                    {option == 1 ? <PostUser /> : null}
                    {option == 2 ? "soy tab ayuda" : null}
                    {/* {option == 3 ? "soy tab config" : null} */}
                    {option == 4 ? <AmigosPro/> : null} 
                </div>
                {/* </div> */}
            </div>
        </>
    )
}