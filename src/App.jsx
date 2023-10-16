import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/userContext";

import Administracion from "./views/Administracion";
import Home from "./views/Home";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/admin"
          element={user ? <Administracion /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};
export default App;
