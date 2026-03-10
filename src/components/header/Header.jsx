import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo-kasa">
        <img src="/src/assets/images/LOGO.png" alt="Logo Kasa" />
      </div>
      <nav className="nav" aria-label="Navigation principale">
        <a href="/" className="nav-link">
          Accueil
        </a>
        <a href="/about" className="nav-link">
          A Propos
        </a>
      </nav>
    </header>
  );
}
