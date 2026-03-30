import { useState } from "react";
import "./volet_depliant.css";

function VoletDepliant({ titre, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="volet">
      <div className="titre-volet" onClick={() => setOpen(!open)}>
        <h3 id="titre">{titre}</h3>
        <span>
          {open ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </span>
      </div>

      {open && <div className="contenu-volet">{children}</div>}
    </div>
  );
}

export default VoletDepliant;
