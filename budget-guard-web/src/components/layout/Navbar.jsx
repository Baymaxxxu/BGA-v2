import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {

    return (

        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">

            <div>

                <h2 className="text-2xl font-bold">

                    Dashboard

                </h2>

            </div>

            <div className="flex items-center gap-6">

                <button>

                    <FaBell className="text-xl" />

                </button>

                <div className="flex items-center gap-2">

                    <FaUserCircle className="text-3xl text-blue-600"/>

                    <span className="font-semibold">
                        User
                    </span>

                </div>

            </div>

        </header>

    );

}