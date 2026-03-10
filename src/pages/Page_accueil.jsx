import Banniere from "../components/Banniere.jsx";
import Conteneur from "../components/Conteneur.jsx";

import "../styles/Page_accueil.css";
function Page_accueil() {
  return (
    <div>
      <Banniere />
      <div className="conteneur">
        <Conteneur />
      </div>
    </div>
  );
}

export default Page_accueil;
