export default function MessageUser(props) {
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

    return (
        <>
            <div className="w-4/4" key="profile">
                {Usuarios.filter(people => people.id == props.id).map(people => (

                    <div key={people} className="flex items-center space-x-4 mb-4 bg-slate-500 rounded-md px-4 py-2 border-b-4 border-indigo-700">
                        <div key="photo" className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://random.imagecdn.app/500/150" alt="Neil image" />
                        </div>
                        <div key="name" className="flex-1 min-w-0 cursor-pointer">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {people.name}
                            </p>
                            <p className="text-sm text-gray-200 truncate">
                                {people.status == "Online" ?
                                    <>
                                        <span className="inline-block w-2 h-2 mr-2 bg-green-600 rounded-full"></span>Online
                                    </>
                                    :
                                    <>
                                        <span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>Activo hace 5 min.
                                    </>
                                }
                            </p>
                        </div>
                        <div key="icon" className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <svg className="cursor-pointer w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        </div>
                    </div>


                ))}
                <div className="max-w-4xl mx-auto space-y-2 grid grid-cols-1 mb-2">
                    <div className="place-self-start text-justify">
                        <div className="bg-slate-400 p-5 rounded-2xl rounded-tl-none">
                            Holaaaaa!
                        </div>
                    </div>
                    <div className="place-self-start text-left text-justify">
                        <div className="bg-slate-400 p-5 rounded-2xl rounded-tl-none">
                            Como estaaaaaaaaaaaas?
                        </div>
                    </div>
                    <div className="place-self-start text-left text-justify">
                        <div className="bg-slate-400 p-5 rounded-2xl rounded-tl-none">
                            que haces pedazo de pata de perro, vamos por unas burguers o que?
                        </div>
                    </div>
                    <div className="place-self-end text-justify">
                        <div className="bg-green-400 text-green-900 p-5 rounded-2xl rounded-tr-none">
                            olo muñeco
                        </div>
                    </div>
                    <div className="place-self-end text-justify">
                        <div className="bg-green-400 text-green-900 p-5 rounded-2xl rounded-tr-none">
                            jalo, tu me dices a que horas
                        </div>
                    </div>
                    <div className="place-self-end text-justify">
                        <div className="bg-green-400 text-green-900 p-5 rounded-2xl rounded-tr-none">
                            sería el sabado?, para organizarme bien no dejar pendientes con otro sabandija por ahí
                        </div>
                    </div>
                </div>


                {/* <form> */}
                {/* <label htmlFor="chat" className="sr-only" _msthash={786500} _msttexthash={182520}>Your message</label> */}
                <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 w-full">
                    <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Upload image</span>
                    </button>
                    <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Add emoji</span>
                    </button>
                    <textarea id="chat" rows={1} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu mensaje..." defaultValue={""} />
                    <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
                {/* </form> */}
            </div>
        </>
    )
}