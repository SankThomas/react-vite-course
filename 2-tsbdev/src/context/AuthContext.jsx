import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const savedUser = localStorage.getItem("blogUser");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }

      setLoading(false);
    };

    getUserFromLocalStorage();
  }, []);

  const login = async (email, name) => {
    const userData = {
      id: Date.now().toString(),
      email,
      name,
      isAdmin: email === "admin@blog.com",
    };

    localStorage.setItem("blogUser", JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem("blogUser");
    setUser(null);
  };

  const context = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
