import React, { createContext, useContext, useState } from 'react';
import User from '../Class/User';


interface AuthContextType {


  user: User | null; // Añadimos la información del usuario
  login: (user: User ) => void; // Pasamos la información del usuario al iniciar sesión
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const [user, setUser] = useState<User | null>(null); // Inicialmente no hay usuario
   // Inicialmente no hay usuario

  const login = (loggedInUser: User) => {
    // Aquí realizarías la lógica de autenticación, como enviar credenciales al servidor
    // y actualizar isAuthenticated basado en la respuesta
    console.log("Usuario logeado")
    
    setUser(loggedInUser as User); // Actualizamos la información del usuario al iniciar sesión
    
  };

  const logout = () => {
    // Lógica para cerrar sesión, como eliminar tokens de sesión

    setUser(null); // Eliminamos la información del usuario al cerrar sesión

  };

  return (
    <AuthContext.Provider value={{  user  , login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
