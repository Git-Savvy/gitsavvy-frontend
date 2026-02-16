import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// Provider: You use this in your app to wrap components so they can access the user data.
export function UserProvider({ children }) {
  // Initialize from localStorage so the session survives a refresh
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  // Keep localStorage in sync with user state
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user"); // If user === null, it means: the user logged out
    }
  }, [user]);

  // Only update state because local storage handled by useEffect
  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null); // Clears the React state (RAM)
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
