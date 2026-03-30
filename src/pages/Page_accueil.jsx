import Banniere from "../components/banniere/Banniere.jsx";
import ConteneurCartes from "../components/Conteneur_cartes/Conteneur_Cartes.jsx";

import "../styles/Page_accueil.css";
function Page_accueil() {
  return (
    <div>
      <div className="banniere">
        <Banniere accueil="url(/src/assets/images/Banbiere-accueil.png)" />
        <h1 className="titre-banniere">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="conteneur_cartes">
        <ConteneurCartes />
      </div>
    </div>
  );
}

export default Page_accueil;
