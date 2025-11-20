import { createContext, useContext, useEffect, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);   // stores logged-in user
  const [token, setToken] = useState(null); // stores JWT token
  const [loading, setLoading] = useState(true);

  // Load user when page refreshes
  useEffect(() => {
    const storedData = localStorage.getItem("jwt");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setToken(parsed.token);
      setUser(parsed.user);
    }
    setLoading(false);
  }, []);

  // Sign in function
  const signIn = (data) => {
    localStorage.setItem("jwt", JSON.stringify(data));
    setUser(data.user);
    setToken(data.token);
  };

  // Sign out
  const signOut = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    setToken(null);
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut, isAdmin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
