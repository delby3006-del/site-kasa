import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-kasa">
        <img src="/src/assets/images/LOGO.png" alt="Logo Kasa" />
      </div>
      <nav className="nav" aria-label="Navigation principale">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/about" className="nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  );
}
