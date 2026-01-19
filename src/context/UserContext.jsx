import { createContext, useState } from "react"; //A context is like a global storage for a part of your app.
import mockUser from "../data/mockUser";

const UserContext = createContext(); //like a container that can store your user data so any component in your app can access it.

function UserProvider({ children }) {
  const [user, setUser] = useState(mockUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
//UserProvider: You use this in your app to wrap components so they can access the user data.(insted of direct UserContext.Provider)
//UserContext: You use this with useContext(UserContext) inside any component that needs the user data.(to be able to consume it)
