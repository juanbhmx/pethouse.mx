import React, { useState } from "react";
import MessageUser from "./MessageUser";

export default function Messages() {

    const Usuarios = [
        {
            id: 1,
            name: "Juan Bautista",
            mail: "ms1@peth.dev",
            status: "Online"
        },
        {
            id: 2,
            name: "Emilio Cardenas Bautista",
            mail: "ms2@peth.dev",
            status: "Online"
        },
        {
            id: 3,
            name: "Pedro Hernández",
            mail: "ms3@peth.dev",
            status: "Online"
        },
        {
            id: 4,
            name: "Irving Ruiz Monoloco",
            mail: "ms4@peth.dev",
            status: "Offline"
        },
        {
            id: 5,
            name: "Melissa Montez",
            mail: "ms5@peth.dev",
            status: "Offline"
        },
        {
            id: 6,
            name: "Irving Ruiz Monoloco",
            mail: "ms4@peth.dev",
            status: "Offline"
        },
        {
            id: 7,
            name: "Melissa Montez",
            mail: "ms5@peth.dev",
            status: "Offline"
        }
    ]
    const [userList, setUserMessage] = useState(1);
    const [ide, setId] = useState(0);

    // const data = "soy nombre desde props"

    return (
        <>
            {userList == 1
                ?
                <>
                    <div className="bg-white rounded-lg border shadow-sm  dark:bg-slate-700 dark:border-slate-700 sm:px-full lg:px-full">
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700" onClick={() => setUserMessage(userList + 1)} >
                                {Usuarios.map(({ id, name, mail, status }) => (
                                    <li className="py-3 sm:py-1 hover:bg-slate-600 hover:rounded-md hover:px-2 cursor-pointer" key={id} onClick={() => setId(ide + id)}>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src="https://random.imagecdn.app/500/150" alt="Neil image" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {mail}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {status == "Online" ?
                                                    <>
                                                        <span className="inline-block w-2 h-2 mr-2 bg-green-600 rounded-full"></span>
                                                    </>
                                                    :
                                                    <>
                                                        <span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
                :
                <MessageUser id={ide} />
            }
        </>
    )
}

// onClick={() => setUserMessage(userList + 1)}