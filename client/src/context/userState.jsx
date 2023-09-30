import { createContext } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';

export const UserContext = createContext();

export function UserProvider ({ children }) {
  const [user, setUser] = useLocalStorage('user', '');

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  );
}
