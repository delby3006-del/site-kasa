function LogementInfos({ logement }) {
  return (
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

      <div className="info-host">
        <div className="host">
          <p className="nom-host">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="photo-host"
          />
        </div>

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
  );
}

export default LogementInfos;
