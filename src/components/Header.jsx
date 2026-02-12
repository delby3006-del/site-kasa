import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink className="logo" to="/" aria-label="Kasa - Accueil">
        Kasa
      </NavLink>
      <nav className="nav" aria-label="Navigation principale">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
