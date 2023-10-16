import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav>
        <div>
          <img src="" alt="" />
        </div>
        <div>
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
      </nav>
    </div>
  );
};
export default Navbar;
