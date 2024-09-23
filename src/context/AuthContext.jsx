import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase.jsx'

// Crea el contexto de autenticación
export const authContext = createContext();

// Crea el proveedor de autenticación
export const useAuth = () => {
    const context = useContext(authContext) // Usa la autenticación del contexto
    if (!context) // Si no hay contexto atrapa el error y lo muestra
        throw new Error('There is no auth provider');
    return context // Retorna el contexto si existe
};

// Funcion que encapsula la autenticación
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Crea el estado del usuario
    const [loading, setLoading] = useState(true); // Carga el usuario si es True

    // Funcion para registrar un usuario
    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    // Funcion para iniciar sesion
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    // Funcion para cerrar sesion
    const logout = () => {
        signOut(auth);
    }

    // Detecta el cambio de estado
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Actualiza el estado del usuario
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <authContext.Provider value={{ signUp, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
} 