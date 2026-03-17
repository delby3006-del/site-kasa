import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";

import Carousel from "../carrousel_logement/carrousel_logement.jsx";
import LogementInfos from "../info_logement/info_logement.jsx";
import VoletLogement from "../Volet_logement/volet_logement.jsx";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/logement.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur de chargement");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === id);

        if (!found) {
          setNotFound(true);
        } else {
          setLogement(found);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <div>Logement introuvable</div>;
  if (!logement) return <div>Chargement...</div>;

  return (
    <section className="logement">
      <Carousel pictures={logement.pictures} title={logement.title} />
      <LogementInfos logement={logement} />
      <VoletLogement
        descriptions={logement.description}
        equipement={logement.equipments}
      />
    </section>
  );
}

export default Logement;
