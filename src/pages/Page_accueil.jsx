import { useEffect, useState } from "react";
import Card from "../components/Cartes.jsx";
import "../styles/Page_accueil.css";
import Cartes from "../components/Cartes.jsx";

function Home() {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/logement.json")
      .then((res) => {
        if (!res.ok) throw new Error("Impossible de charger logement.json");
        return res.json();
      })
      .then((data) => {
        setLogements(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <section className="grid-logements">
      {logements.map((logement) => (
        <Cartes
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </section>
  );
}

export default Home;
