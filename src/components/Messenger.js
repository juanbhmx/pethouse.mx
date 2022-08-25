import Avatar from './Avatar'
import Chat from './MessageUser'
import AmigosChat from './AllFriends'
import HeaderChat from './EncabezadoMessage'

export default function Messenger() {
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
            <div className="container h-screen mx-auto my-4 ">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full  md:w-4/12 md:mx-2">
                        <div className="dark:bg-slate-700 rounded-lg p-3 border-t-4 border-green-400 ">
                            <Avatar />
                            <div className="border-b border-gray-300"></div>
                            <AmigosChat/>
                        </div>
                        
                    </div>
                    {/* Right Side */}
                    <div className="sm:mt-2 md:mt-0 w-full md:w-9/12 h-64 static ">
                        <div className="p-2 shadow-lg dark:bg-slate-700 rounded-lg ">
                            <HeaderChat />
                            {/* <div className="border-b border-gray-300"></div> */}
                            <Chat/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}