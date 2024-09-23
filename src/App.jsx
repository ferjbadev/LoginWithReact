import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ProfileUser } from './components/ProfileUser';
import { AuthProvider } from './context/AuthContext';
import { ProtecterRoute } from './components/Protecter';


function App() {
  return (
    <div className="  ">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="Profile" element={
            <ProtecterRoute>
              <ProfileUser />
            </ProtecterRoute>
          }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App; 
