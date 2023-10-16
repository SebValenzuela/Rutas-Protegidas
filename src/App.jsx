import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/userContext";

import Administracion from "./views/Administracion";
import Home from "./views/Home";

const App = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams(); // Utiliza useParams para obtener los parámetros de la URL

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={user ? <Administracion /> : () => navigate('/login')}
        />
      </Routes>
      {id && <p>Parámetro 'id' de la URL: {id}</p>} {/* Muestra el parámetro 'id' si existe */}
    </div>
  );
};

export default App;
