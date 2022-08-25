export default function HeaderMessage(){
    return(
        <>
        <div className="flex items-center space-x-4 mb-4 rounded-md px-4 py-2 border-b-2 border-green-400">
                        <div key="photo" className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://random.imagecdn.app/500/150" alt="Neil image" />
                        </div>
                        <div key="name" className="flex-1 min-w-0 cursor-pointer">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                "prop.name"
                            </p>
                            <p className="text-sm text-gray-200 truncate">
                                online
                            </p>
                        </div>
                        <div key="icon" className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <svg className="cursor-pointer w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        </div>
                    </div>
        </>
    )
}