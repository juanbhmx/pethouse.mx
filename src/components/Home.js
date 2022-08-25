import Post from './Post'
import MenuIzq from './menuIzq'
import Avatar from './Avatar'
import MenuDer from './MenuDerecha'
import PublicaPost from './PubPost'

export default function Home() {
    return (
        <>

            <div className="flex items-center mb-10">
                <div className="max-w-7xl w-full mx-auto lg:py-4 md:py-4 xl:py-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 lg:space-y-2 md:space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                        <div className="w-full lg:w-1/3">
                            <div className="sm:hidden md:hidden lg:contents max-w-xl mx-auto px-4 py-4 dark:bg-slate-700 shadow-lg rounded-lg">
                                <MenuIzq />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <PublicaPost />
                            <Post />
                        </div>
                        <div className="w-full lg:w-1/3 ">
                            <div className="sm:hidden md:hidden lg:block max-w-xl mx-auto px-4 py-4 dark:bg-slate-700 shadow-md rounded-lg ">
                                <Avatar />
                                <MenuDer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

// className={activeStatus == 2 ? "text-sm border-indigo-700 pt-3 rounded-t text-white mr-12" : "text-sm text-white py-3 flex items-center mr-12 hover:text-white cursor-pointer"