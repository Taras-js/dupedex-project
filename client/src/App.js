import React from "react";
import { useRouter } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import "materialize-css";
import { Navbar } from "./components/Navbar";

function App() {
  const { token, userId, logout, login } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRouter(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {isAuthenticated && <Navbar />}
      <div>{routes}</div>
    </AuthContext.Provider>
  );
}

export default App;
