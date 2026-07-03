import { NavLink } from "react-router-dom";
import {
    FaChartPie,
    FaWallet,
    FaTags,
    FaMoneyBillWave,
    FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {

    const { logout } = useAuth();

    const menus = [
        {
            name: "Dashboard",
            icon: <FaChartPie />,
            path: "/dashboard",
        },
        {
            name: "Category",
            icon: <FaTags />,
            path: "/categories",
        },
        {
            name: "Budget",
            icon: <FaWallet />,
            path: "/budgets",
        },
        {
            name: "Transaction",
            icon: <FaMoneyBillWave />,
            path: "/transactions",
        },
    ];

    return (

        <aside className="w-64 bg-slate-900 text-white flex flex-col">

            <div className="text-center py-6 border-b border-slate-700">

                <h1 className="text-2xl font-bold">
                    Budget Guard
                </h1>

                <p className="text-sm text-gray-400">
                    Agent
                </p>

            </div>

            <nav className="flex-1 mt-5">

                {menus.map((menu) => (

                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-4 transition ${
                                isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"
                            }`
                        }
                    >
                        {menu.icon}

                        {menu.name}

                    </NavLink>

                ))}

            </nav>

            <button
                onClick={logout}
                className="flex items-center gap-3 px-6 py-4 hover:bg-red-600 transition"
            >

                <FaSignOutAlt />

                Logout

            </button>

        </aside>

    );
}