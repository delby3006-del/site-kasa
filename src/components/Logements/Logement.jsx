import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

function PageLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/logement.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (!found) setNotFound(true);
        else setLogement(found);
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <Navigate to="/error" replace />;
  if (!logement) return <div>Chargement...</div>;

  return <Logement logement={logement} />;
}
export default PageLogement;
