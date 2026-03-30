import "./Banniere.css";

export default function Banniere({ accueil, apropos, children }) {
  return (
    <div
      className="image-banniere"
      style={{ backgroundImage: apropos || accueil }}
    >
      <div className="overlay"></div>

      <div className="titre-banniere">{children}</div>
    </div>
  );
}
