import { Link } from "react-router-dom";
export default function Avatar() {
    return (
        <>
            <Link to="/profile">
                <div className="flex items-center my-4 mx-4 space-x-4 cursor-pointer">
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80" alt="" />
                    <div className="font-medium dark:text-white">
                        <div>Juan Bautista</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Perfil • FrontEnd</div>
                    </div>
                </div>
            </Link>
        </>
    )
}