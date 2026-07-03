import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {

  const { logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm p-5 flex justify-between items-center">

      <div>

        <h2 className="font-bold text-xl">
          Budget Guard Agent
        </h2>

      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </header>
  );
}