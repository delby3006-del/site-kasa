function VoletLogement({ descriptions, equipement }) {
  return (
    <div className="volet-logement">
      <div className="volet-description">
        <h3 className="titre-volet">Description</h3>
        <p className="info-volet">{descriptions}</p>
      </div>
      <div className="volet-equipement">
        <h3 className="titre-volet">Equipement</h3>

        <ul className="info-volet">
          {equipement.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VoletLogement;
