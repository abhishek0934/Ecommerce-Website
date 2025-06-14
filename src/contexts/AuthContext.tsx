import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, User } from '../types';
import { getUsers, saveUsers, getCurrentUser, setCurrentUser, initializeLocalStorage } from '../utils/localStorage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    initializeLocalStorage();
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const users = getUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  const register = (email: string, password: string, name: string): boolean => {
    const users = getUsers();
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
      return false; // User already exists
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      password,
      name,
      role: 'user'
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
    setUser(newUser);
    setCurrentUser(newUser);
    return true;
  };

  const logout = (): void => {
    setUser(null);
    setCurrentUser(null);
  };

  const isAdmin = user?.role === 'admin';

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};