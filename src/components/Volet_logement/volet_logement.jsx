import VoletDepliant from "../Volet_Depliant/Volet_Depliant";
import "./volet_logement.css";

function VoletLogement({ descriptions, equipement }) {
  return (
    <div className="volet-logement">
      <VoletDepliant titre="Description">
        <p>{descriptions}</p>
      </VoletDepliant>

      <VoletDepliant titre="Équipements">
        <ul>
          {equipement.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </VoletDepliant>
    </div>
  );
}

export default VoletLogement;
