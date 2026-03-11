import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          setCurrentIndex(0);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (notFound) return <div>Logement introuvable</div>;
  if (!logement) return <div>Chargement...</div>;

  const hasMultiplePictures = logement.pictures.length > 1;

  return (
    <section className="logement">
      <div className="carousel">
        <img
          src={logement.pictures[currentIndex]}
          alt={`${logement.title} ${currentIndex + 1}`}
          className="carousel-image"
        />

        {hasMultiplePictures && (
          <>
            <button className="carousel-boutton prev" onClick={handlePrev}>
              &#10096;
            </button>

            <button className="carousel-boutton next" onClick={handleNext}>
              &#10097;
            </button>

            <p className="carousel-compteur">
              {currentIndex + 1} / {logement.pictures.length}
            </p>
          </>
        )}
      </div>

      <div className="logement-infos">
        <div className="informations-general">
          <h1 className="titre-logement">{logement.title}</h1>
          <p className="localisation-logement">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="host">
          <p className="nom-host">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="photo-host"
          ></img>
          <div className="nombre-etoile">
            {[1, 2, 3, 4, 5].map((etoile) => (
              <span key={etoile}>
                <i
                  className="fa-solid fa-star"
                  style={{
                    color:
                      etoile <= Number(logement.rating) ? "#FF6060" : "#E3E3E3",
                  }}
                ></i>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logement;
