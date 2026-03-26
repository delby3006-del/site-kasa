import "./volet_logement.css";

import { useState } from "react";

function VoletLogement({ descriptions, equipement }) {
  const [openDesc, setOpenDesc] = useState(false);
  const [openEquip, setOpenEquip] = useState(false);

  return (
    <div className="volet-logement">
      <div className="volet-description">
        <div className="titre-volet" onClick={() => setOpenDesc(!openDesc)}>
          <h3 id="titre">Description</h3>
          <span>
            {openDesc ? (
              <i class="fa-solid fa-angle-down"></i>
            ) : (
              <i class="fa-solid fa-angle-up"></i>
            )}
          </span>
        </div>

        {openDesc && (
          <div className="contenu-description">
            <p>{descriptions}</p>
          </div>
        )}
      </div>

      <div className="volet-equipement">
        <div className="titre-volet" onClick={() => setOpenEquip(!openEquip)}>
          <h3 id="titre">Équipements</h3>
          <span>
            {openDesc ? (
              <i class="fa-solid fa-angle-down"></i>
            ) : (
              <i class="fa-solid fa-angle-up"></i>
            )}
          </span>
        </div>

        {openEquip && (
          <div className="contenu-equipement">
            <ul>
              {equipement.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default VoletLogement;
