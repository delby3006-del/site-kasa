import Banniere from "../components/banniere/Banniere.jsx";
import ConteneurCartes from "../components/Conteneur_cartes/Conteneur_Cartes.jsx";

import "../styles/Page_accueil.css";
function Page_accueil() {
  return (
    <div>
      <Banniere />
      <div className="conteneur_cartes">
        <ConteneurCartes />
      </div>
    </div>
  );
}

export default Page_accueil;
