/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Notificaciones(props) {
    const Notificaciones = [
        {
            id: 1,
            name: "Juan Bautista",
            message: "oh! ayuden",
            time: "5"
        },
        {
            id: 2,
            name: "Pedro Bautista",
            message: "oh!",
            time: "45"
        },
        {
            id: 3,
            name: "Juarez Bautista",
            message: "ayuden",
            time: "23"
        },
        {
            id: 4,
            name: "Seferino Bautista",
            message: "Que fue?",
            time: "7"
        },
        {
            id: 5,
            name: "Moises Bautista",
            message: "Entonces?",
            time: "4"
        },
        {
            id: 6,
            name: "Roberto Bautista",
            message: "disponible?",
            time: "58"
        },
        {
            id: 7,
            name: "Antonio Bautista",
            message: "Cuantos meses?",
            time: "45"
        },
        {
            id: 8,
            name: "Macario Bautista",
            message: "de que marca?",
            time: "15"
        },
        {
            id: 9,
            name: "Benjamin Bautista",
            message: "oh! ayuden",
            time: "54"
        },
        {
            id: 10,
            name: "Tu tío felipe",
            message: "oh! ayuden",
            time: "34"
        },
        {
            id: 11,
            name: "Karen Bautista",
            message: "oh! ayuden",
            time: "23"
        },
        {
            id: 12,
            name: "Carlos Bautista",
            message: "oh! ayuden",
            time: "44"
        },
        {
            id: 13,
            name: "Ortodoncia Bautista",
            message: "oh! ayuden",
            time: "23"
        },
    ]
    return (
        <>
            <div>
                <div className="mb-14 rounded-lg z-20 w-full max-w-full bg-white divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700 block">
                    <h1 className="text-2xl font-bold tracking-tight text-white mb-2 mt-2 ml-4">Notificaciones</h1>
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {/* {dataMarket.map(({ product, price, location, photo, id }) => ( */}
                        {Notificaciones.map(({ id, name, message, time }) => (
                            <a key={id} href="#" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img className="w-11 h-11 rounded-full" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="Joseph image" />
                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                                        <svg className="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                                    </div>
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">Notificación <span className="font-semibold text-gray-900 dark:text-white">{name}</span>: "{message}"</div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">Hace {time} min.</div>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}