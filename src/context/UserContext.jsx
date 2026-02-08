import { createContext, useContext, useState } from "react"; //A context is like a global storage for a part of your app.

const UserContext = createContext(); //like a container that can store your user data so any component in your app can access it.

function UserProvider({ children }) {
  // Initialize from localStorage so the session survives a refresh
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);// Clears the React state (RAM)
    localStorage.removeItem("user");// Clears the browser storage (Disk)
  };

  return (
    <UserContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUserContext = () => useContext(UserContext);
export { UserProvider, useUserContext };
//UserProvider: You use this in your app to wrap components so they can access the user data.(insted of direct UserContext.Provider)
//UserContext: You use this with useContext(UserContext) inside any component that needs the user data.(to be able to consume it) but useAuth do it already
