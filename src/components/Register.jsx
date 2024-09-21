import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ToastNotifications } from '../components/Notifications';

export function Register() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });


    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(user.email, user.password);
            ToastNotifications.notifyRegister(); // Solo notifica éxito si el registro fue exitoso
            setTimeout(() => navigate('/'), 3000);
        } catch (error) {
            setError(error.message);
            ToastNotifications.notifyError(error.message); // Muestra el mensaje de error
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
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
                        className="bg-green-500 hover:bg-green-700 text-white focus:ring-4 font-medium rounded-lg w-auto px-5 py-3"
                    >
                        Register
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    );
}
