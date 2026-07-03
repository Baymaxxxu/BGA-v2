import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const submit = async (e) => {

        e.preventDefault();

        try {

            await login(email, password);

            toast.success("Login berhasil");

            navigate("/dashboard");

        } catch (err) {

            toast.error("Email atau password salah");

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <form
                onSubmit={submit}
                className="bg-white w-96 rounded-xl shadow-lg p-8"
            >

                <h1 className="text-3xl font-bold mb-8 text-center">

                    Budget Guard

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg p-3 mb-4"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg p-3 mb-6"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button
                    className="w-full bg-blue-600 text-white p-3 rounded-lg"
                >

                    Login

                </button>

                <p className="mt-5 text-center">

                    Belum punya akun?

                    <Link
                        to="/register"
                        className="text-blue-600 ml-2"
                    >

                        Register

                    </Link>

                </p>

            </form>

        </div>

    );

}