import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav>
        <div className="row">
          <div className="col-6">
            <img className="nav-img" src="../../public/assets/img/w-ubicacion.png" alt="" />
          </div>
          <div className="col-6">
            <div className="row justify-end">
              <NavLink
                className={setActiveClass}
                to="/"
              >
                {" "}
                Home{" "}
              </NavLink>

              <NavLink
                className={setActiveClass}
                to="/admin"
              >
                {" "}
                Pokemones{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
