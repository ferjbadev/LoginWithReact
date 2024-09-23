import { useAuth } from "../context/AuthContext";

export const ProfileUser = () => {

    const { user, logout, loading } = useAuth();

    // Si loading is True muestra un mensaje de Cargando
    if (loading) {
        return <div>Loading...</div>;
    }

    // funcion para cerrar sesion
    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-300 to-blue-400">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6">
                    <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                </div>
                <div className="border-t border-gray-200">
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email Adress</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                    </div>
                </div>
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <button
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Edit Profile
                    </button>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >

                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}
