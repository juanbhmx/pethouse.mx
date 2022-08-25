export default function FriendsProfile() {
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
            status: "Online"
        },
        {
            id: 5,
            name: "Melissa Montez",
            mail: "ms5@peth.dev",
            status: "Online"
        },
        {
            id: 6,
            name: "Juan Bautista",
            mail: "ms1@peth.dev",
            status: "Online"
        },
        {
            id: 7,
            name: "Emilio Cardenas Bautista",
            mail: "ms2@peth.dev",
            status: "Online"
        },
        {
            id: 8,
            name: "Pedro Hernández",
            mail: "ms3@peth.dev",
            status: "Online"
        },
        {
            id: 9,
            name: "Irving Ruiz Monoloco",
            mail: "ms4@peth.dev",
            status: "Offline"
        },
        {
            id: 10,
            name: "Melissa Montez",
            mail: "ms5@peth.dev",
            status: "Offline"
        },
        {
            id: 11,
            name: "Juan Bautista",
            mail: "ms1@peth.dev",
            status: "Offline"
        },
        {
            id: 12,
            name: "Emilio Cardenas Bautista",
            mail: "ms2@peth.dev",
            status: "Offline"
        },
        {
            id: 13,
            name: "Pedro Hernández",
            mail: "ms3@peth.dev",
            status: "Offline"
        },
        {
            id: 14,
            name: "Irving Ruiz Monoloco",
            mail: "ms4@peth.dev",
            status: "Offline"
        },
        {
            id: 15,
            name: "Melissa Montez",
            mail: "ms5@peth.dev",
            status: "Offline"
        }
    ]
    return (
        <>

            <div class="mx-auto text-center mx-2">

                <div class="mb-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-1 gap-1 divide-y divide-gray-200 dark:divide-gray-700">
                    {Usuarios.map(({ id, name, mail }) => (
                        <div class="relative overflow-hidden bg-slate-700 shadow-lg rounded-lg p-1">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="https://random.imagecdn.app/500/150" alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 text-start">
                                    <p className="text-sm cursor-pointer font-medium text-gray-900 truncate dark:text-white">
                                        {name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {mail}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}