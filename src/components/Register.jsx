import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Register() {
    // Estado inicial de los datos de usuario
    const [user, setUser] = useState({
        email: "",
        password: ""
    });


    const { signUp } = useAuth(); // Funcion de registro
    const navigate = useNavigate();
    const [error, setError] = useState(''); // Error de inicio de sesión

    // Función para manejar cambios en los inputs del formulario
    const handleChange = ({ target: { name, value } }) => {
        // Actualiza el estado del usuario
        setUser({ ...user, [name]: value });
    };

    // Para manejar el envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que se recargue la pagina
        try {
            await signUp(user.email, user.password); // Registra un usuario
            setTimeout(() => navigate('/Login'), 3000); // Muestra el componente Login despues de 3 segundos
        } catch (error) {
            setError(error.message); // Captura el error y lo muestra
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 to-green-400">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 underline">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="mt-3 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your email"
                        onChange={handleChange} // Captura los cambios
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 underline">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        className="mt-3 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your password"
                        onChange={handleChange} // Captura los cambios
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="flex justify-center py-3 px-8 border-2 border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Register
                    </button>
                </div>
                <div className="mt-6">
                    <button
                        type='button'
                        onClick={() => navigate('/Login')}
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Already have an account? Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}
