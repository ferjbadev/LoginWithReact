import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Redirige al componente de login
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-yellow-300 to-purple-400">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-gray-800">Welcome to our platform!</h1>
                <p className="text-lg mt-2">Please log in to access your account</p>
                {/* Botón de login */}
                <button
                    onClick={handleLoginClick}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Login
                </button>
            </div>
            {/* div de footer */}
            <footer className="absolute bottom-4 text-black text-2xl">
                © 2024 All rights reserved.
            </footer>
        </div>
    );
}
