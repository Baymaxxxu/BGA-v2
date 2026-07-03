import { createContext, useContext, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (email, password) => {

        const response = await api.post("/login", {
            email,
            password,
        });

        localStorage.setItem("token", response.data.token);

        setUser(response.data.user);
    };

    const logout = async () => {

        try {
            await api.post("/logout");
        } catch (err) {}

        localStorage.removeItem("token");

        setUser(null);
    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >

            {children}

        </AuthContext.Provider>

    );
};

export const useAuth = () => useContext(AuthContext);