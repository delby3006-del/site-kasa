import "../styles/Conteneur.css";
// import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Page_accueil.jsx";

export default function Conteneur() {
  return (
    <main className="main">
      <div className="conteneur">
        <Home />
      </div>
    </main>
  );
}
