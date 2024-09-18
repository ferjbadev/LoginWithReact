import { useAuth } from "../context/AuthContext";
export function Home() {

    const authContext = useAuth();
    console.log(authContext);
    return (
        <div>
            Home
        </div>
    )
};
