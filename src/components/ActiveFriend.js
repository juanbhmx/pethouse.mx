export default function ActiveFriend() {
    const Usuarios = [
        {
            id: 1,
            name: "Victor Gonzales",
            mail: "desarrollo@peth.dev",
            status: "Online"
        },
        {
            id: 2,
            name: "Juan Bautista",
            mail: "desarrollo@peth.dev",
            status: "Offline"
        },
        {
            id: 3,
            name: "Manuel Hernández",
            mail: "desarrollo@peth.dev",
            status: "Offline"
        },
        {
            id: 4,
            name: "Joshua Monoloco",
            mail: "desarrollo@peth.dev",
            status: "Offline"
        },
        {
            id: 5,
            name: "Mario Cortes",
            mail: "desarrollo@peth.dev",
            status: "Offline"
        }
    ]
    return (
        <>

            <div className="bg-white rounded-lg border shadow-sm  dark:bg-slate-700 dark:border-slate-700 sm:px-full lg:px-full">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {Usuarios.map(({ id, name, mail, status }) => (
                            <li className="py-3 sm:py-1" key={id}>
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="Neil image" />
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
                                                <span className="inline-block w-2 h-2 mr-2 bg-green-600 rounded-full"></span> Activo
                                            </>
                                            :
                                            <>
                                                <span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span> Hace 2 min.
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
    )
}