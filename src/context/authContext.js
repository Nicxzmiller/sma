import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'Nicholas Markus',
      profilePicture:
        'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
